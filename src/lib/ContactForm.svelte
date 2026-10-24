<script lang="ts">
	import { useForm, Hint, required, pattern, email } from 'svelte-use-form';
	import { phoneValidator } from './constants';
	import HCaptcha from 'svelte-hcaptcha';
	import { browser } from '$app/environment';
	import { env } from '$env/dynamic/public';

	$: disabled = false;
	$: loading = false;
	$: status = { error: false, success: false };

	let hcaptcha: { reset: () => void };

	const form = useForm({
		name: { validators: [required] },
		email: { validators: [required, email] },
		phone: { validators: [pattern(phoneValidator)] },
		company: {},
		message: { validators: [required] },
		hcaptchaResponse: { validators: [required] },
	});

	const handleSubmit = async () => {
		try {
			disabled = true;
			loading = true;

			const formData = new FormData();

			for (const [key, value] of Object.entries($form.values)) {
				if (!value) continue;
				formData.append(key, value);
			}

			const response = await fetch('/submit-form', {
				method: 'POST',
				body: formData,
			});

			status.success = response.status < 400;
			status.error = !status.success;

			if (status.success) {
				$form.reset();
			}

			hcaptcha.reset();

			loading = false;
			disabled = false;
		} catch {
			disabled = false;
			status.success = false;
			status.error = true;
		}
	};

	const handleSuccess = (payload: { detail: { token: string } }) => {
		$form.hcaptchaResponse.change(payload.detail.token);
		$form.hcaptchaResponse.touched = true;
		$form.touched = true;
	};

	const handleError = () => {
		console.log('error occurred');
		$form.hcaptchaResponse.change('');
		$form.hcaptchaResponse.touched = true;
		$form.touched = true;
	};
</script>

<div>
	<form method="POST" on:submit|preventDefault={handleSubmit} use:form>
		<fieldset class="flex flex-col gap-5 w-full" {disabled}>
			{#if status.error || status.success}
				<div
					class:bg-red-500={status.error}
					class:bg-green-500={status.success}
					class="text-white px-4 py-3 rounded-lg w-full"
				>
					{#if status.success}
						Thank you for your submission!
					{/if}
					{#if status.error}
						An error occurred when submitting the form. Please try again.
					{/if}
				</div>
			{/if}
			<div class="grid lg:grid-cols-2 gap-4">
				<div>
					<label for="name" class="mb-1.5 block text-sm font-medium">
						Name
						<span class="text-red-500" aria-hidden="true">*</span>
					</label>
					<input
						class="textbox"
						class:invalid={($form.touched || $form.name.touched || $form.submitted) &&
							!$form.name.valid}
						name="name"
						id="name"
						placeholder="Jane Doe"
					/>
				</div>
				<div>
					<label for="email" class="mb-1.5 block text-sm font-medium">
						E-mail
						<span class="text-red-500" aria-hidden="true">*</span>
					</label>
					<input
						class="textbox"
						class:invalid={($form.touched || $form.email.touched) && !$form.email.valid}
						name="email"
						id="email"
						placeholder="jane@example.com"
					/>
					<Hint for="email" on="email" class="hint">
						{$form.email.value.length === 0 ? '' : 'E-mail is in an invalid format.'}
					</Hint>
				</div>
				<div>
					<label for="phone" class="mb-1.5 block text-sm font-medium"> Phone </label>
					<input
						class="textbox"
						class:invalid={($form.touched || $form.phone.touched) && !$form.phone.valid}
						name="phone"
						id="phone"
						placeholder="(207) 555-0195"
					/>
					<Hint for="phone" on="pattern" class="hint">Phone is in an invalid format.</Hint>
				</div>
				<div>
					<label for="company" class="mb-1.5 block text-sm font-medium"> Organization </label>
					<input
						class="textbox"
						class:invalid={($form.touched || $form.company.touched) && !$form.company.valid}
						name="company"
						id="company"
						placeholder="Acme Industries"
					/>
				</div>
			</div>

			<div>
				<label for="message" class="mb-1.5 block text-sm font-medium">
					Message
					<span class="text-red-500" aria-hidden="true">*</span>
				</label>
				<textarea
					class="textbox h-36 resize-none"
					class:invalid={($form.touched || $form.message.touched) && !$form.message.valid}
					name="message"
					id="message"
					placeholder="What are you hoping to improve?"
				></textarea>
			</div>

			<div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
				<div class="hcaptcha-container">
					<input name="hcaptchaResponse" id="hcaptchaResponse" hidden />
					<!-- Runtime env can't be read while prerendering, so the widget is client-only -->
					{#if browser}
						<HCaptcha
							bind:this={hcaptcha}
							sitekey={env.PUBLIC_HCAPTCHA_SITEKEY}
							style="width: 100%;"
							on:success={handleSuccess}
							on:error={handleError}
						/>
					{/if}
				</div>

				<button class="button primary min-w-36" disabled={!$form.valid}>
					{#if !loading}
						Send message
					{:else}
						<span
							class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
							aria-label="Sending"
						></span>
					{/if}
				</button>
			</div>
		</fieldset>
	</form>
</div>
