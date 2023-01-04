<script lang="ts">
    import { useForm, Hint, required, pattern, email } from "svelte-use-form";
	import { phoneValidator } from "./constants";
    import { Circle } from 'svelte-loading-spinners';
    import HCaptcha from 'svelte-hcaptcha';
    import { PUBLIC_HCAPTCHA_SITEKEY } from '$env/static/public';

    let disabled: boolean;
    $: disabled = false;

    let loading: boolean;
    $: loading = false;

    let status: boolean | null;
    $: status = null;

    let hcaptcha: {reset: () => void};

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

            const response = await fetch('/', {
                method: 'POST',
                body: formData,
            });

            status = response.status < 400;

            if (status) {
                $form.reset();
            }

            hcaptcha.reset();
            
            loading = false;
            disabled = false;
        } catch {
            disabled = false;
            status = false;
        }
    }   

    const handleSuccess = (payload: {detail: {token: string}}) => { 
        console.log(payload.detail.token);
        $form.hcaptchaResponse.change(payload.detail.token);
        $form.hcaptchaResponse.touched = true;
    };

    const handleError = () => {
        console.log('error occurred');
        $form.hcaptchaResponse.change('');
        $form.hcaptchaResponse.touched = true;
    }
</script>

<form method="POST" on:submit|preventDefault={handleSubmit} use:form>
    <fieldset class="flex flex-col gap-4 w-96 max-w-full" {disabled}>
        {#if status !== null}
        <div 
            class:bg-red-500={!status}
            class:bg-green-500={status}
            class="text-white p-2 rounded-md w-full"
        >
            {#if status}
                Thank you for your submission!
            {/if}
            {#if !status}
                An error occurred when submitting the form. Please try again.
            {/if}
        </div>
        {/if}
        <div>
            <label for="name">
                Name
                <span class="text-red-500">*</span>
            </label>
            <input 
                class="textbox" 
                class:invalid={($form.touched || $form.name.touched) && !$form.name.valid}
                name="name"
                id="name"
                placeholder="John Q. Sample"
            />
        </div>
        <div>
            <label for="email">
                E-mail
                <span class="text-red-500">*</span>
            </label>
            <input
                class="textbox"
                class:invalid={($form.touched || $form.email.touched) && !$form.email.valid}
                name="email"
                id="email"
                placeholder="john@example.com"
            />
            <Hint for="email" on="email" class="hint">E-mail is in an invalid format.</Hint>
        </div>
        <div>
            <label for="phone">
                Phone
            </label>
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
            <label for="company">
                Organization
            </label>
            <input
                class="textbox"
                class:invalid={($form.touched || $form.company.touched) && !$form.company.valid}
                name="company"
                id="company"
                placeholder="Acme Industries"
            />
        </div>
        <div>
            <label for="message">
                Message
                <span class="text-red-500">*</span>
            </label>
            <textarea
                class="textbox h-40 resize-none"
                class:invalid={($form.touched || $form.message.touched) && !$form.message.valid}
                name="message" 
                id="message"
                placeholder="Additional information here..." 
            />
        </div>

        <div class='ml-auto'>
            <input name="hcaptchaResponse" id="hcaptchaResponse" hidden />
            <HCaptcha
                bind:this={hcaptcha}
                sitekey={PUBLIC_HCAPTCHA_SITEKEY}
                on:success={handleSuccess}
                on:error={handleError}
            />
        </div>

        <button
            class="button button-blue ml-auto"
            disabled={!$form.valid}
        >
            {#if !loading}
                Submit
            {/if}
            {#if loading}
                <Circle size="16" color="currentColor" />
            {/if}
        </button>
    </fieldset>
</form>