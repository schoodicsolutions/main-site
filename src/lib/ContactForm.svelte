<script lang="ts">
	import { tick } from 'svelte';
	import { enhance } from '$app/forms';
	import HCaptcha from './HCaptcha.svelte';
	import Icon from './Icon.svelte';
	import { emailPattern, phonePattern } from './constants';
	import { services } from './content/services';

	type Field = 'name' | 'email' | 'phone' | 'message';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let company = $state('');
	let message = $state('');
	let interests = $state<string[]>([]);
	let token = $state<string | null>(null);

	let touched = $state<Partial<Record<Field, boolean>>>({});
	let attempted = $state(false);
	let status = $state<'idle' | 'sending' | 'success' | 'error'>('idle');

	let form: HTMLFormElement;
	let captcha: ReturnType<typeof HCaptcha>;

	const errors = $derived({
		name: name.trim() ? '' : 'Please tell us your name.',
		email: emailPattern.test(email.trim()) ? '' : 'Enter a valid email address.',
		phone: !phone.trim() || phonePattern.test(phone.trim()) ? '' : 'Enter a valid phone number.',
		message: message.trim() ? '' : 'Tell us a little about what you need.',
	});

	const valid = $derived(Object.values(errors).every((e) => !e));
	const show = (field: Field) => (touched[field] || attempted) && errors[field];

	function resetFields() {
		name = email = phone = company = message = '';
		interests = [];
		touched = {};
		attempted = false;
		captcha.reset();
	}
</script>

<form
	bind:this={form}
	method="POST"
	action="/submit-form"
	novalidate
	use:enhance={async ({ cancel }) => {
		attempted = true;
		if (!valid || !token) {
			cancel();
			await tick();
			form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
			return;
		}

		status = 'sending';

		return async ({ result }) => {
			status = result.type === 'success' ? 'success' : 'error';
			if (status === 'success') resetFields();
			else captcha.reset();
		};
	}}
>
	<fieldset class="flex flex-col gap-5" disabled={status === 'sending'}>
		<legend class="sr-only">Contact Schoodic</legend>

		<div role="status" aria-live="polite">
			{#if status === 'success'}
				<p class="flex items-center gap-3 rounded-lg bg-emerald-50 px-4 py-3 text-emerald-800">
					<Icon name="check" size={20} />
					Thanks! Your message is on its way. We’ll be in touch soon.
				</p>
			{:else if status === 'error'}
				<p class="rounded-lg bg-red-50 px-4 py-3 text-red-800">
					Something went wrong sending your message. Please try again, or book a call instead.
				</p>
			{/if}
		</div>

		<div class="grid gap-5 sm:grid-cols-2">
			<div>
				<label for="name" class="label"
					>Name <span class="text-red-600" aria-hidden="true">*</span></label
				>
				<input
					id="name"
					name="name"
					class="textbox"
					class:invalid={show('name')}
					autocomplete="name"
					required
					aria-invalid={!!show('name')}
					aria-describedby="name-error"
					bind:value={name}
					onblur={() => (touched.name = true)}
				/>
				<p id="name-error" class="hint">{show('name') || ''}</p>
			</div>
			<div>
				<label for="email" class="label"
					>Email <span class="text-red-600" aria-hidden="true">*</span></label
				>
				<input
					id="email"
					name="email"
					type="email"
					class="textbox"
					class:invalid={show('email')}
					autocomplete="email"
					required
					aria-invalid={!!show('email')}
					aria-describedby="email-error"
					bind:value={email}
					onblur={() => (touched.email = true)}
				/>
				<p id="email-error" class="hint">{show('email') || ''}</p>
			</div>
			<div>
				<label for="phone" class="label"
					>Phone <span class="font-normal text-ink/65">(optional)</span></label
				>
				<input
					id="phone"
					name="phone"
					type="tel"
					class="textbox"
					class:invalid={show('phone')}
					autocomplete="tel"
					aria-invalid={!!show('phone')}
					aria-describedby="phone-error"
					bind:value={phone}
					onblur={() => (touched.phone = true)}
				/>
				<p id="phone-error" class="hint">{show('phone') || ''}</p>
			</div>
			<div>
				<label for="company" class="label"
					>Organization <span class="font-normal text-ink/65">(optional)</span></label
				>
				<input
					id="company"
					name="company"
					class="textbox"
					autocomplete="organization"
					bind:value={company}
				/>
			</div>
		</div>

		<fieldset>
			<legend class="label">What are you interested in?</legend>
			<div class="flex flex-wrap gap-2">
				{#each services as service (service.slug)}
					<label class="chip">
						<input
							type="checkbox"
							name="interests"
							value={service.name}
							class="sr-only"
							bind:group={interests}
						/>
						{service.name}
					</label>
				{/each}
			</div>
		</fieldset>

		<div>
			<label for="message" class="label"
				>How can we help? <span class="text-red-600" aria-hidden="true">*</span></label
			>
			<textarea
				id="message"
				name="message"
				class="textbox h-36 resize-y"
				class:invalid={show('message')}
				placeholder="What’s slowing you down, or what would you like to build?"
				required
				aria-invalid={!!show('message')}
				aria-describedby="message-error"
				bind:value={message}
				onblur={() => (touched.message = true)}
			></textarea>
			<p id="message-error" class="hint">{show('message') || ''}</p>
		</div>

		<div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<HCaptcha bind:this={captcha} onchange={(t) => (token = t)} />
				{#if attempted && !token}
					<p class="hint">Please complete the spam check.</p>
				{/if}
			</div>

			<button class="button primary min-w-40" type="submit">
				{#if status === 'sending'}
					<span
						class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
					></span>
					Sending…
				{:else}
					Send message
					<Icon name="arrow-right" size={18} />
				{/if}
			</button>
		</div>
	</fieldset>
</form>
