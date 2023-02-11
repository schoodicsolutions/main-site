<script lang="ts">
    import { useForm, Hint, required, pattern, email } from "svelte-use-form";
	import { phoneValidator } from "./constants";
    import { Circle } from 'svelte-loading-spinners';
    import HCaptcha from 'svelte-hcaptcha';
    import { PUBLIC_HCAPTCHA_SITEKEY } from '$env/static/public';
	import MediaQuery from "svelte-media-queries";
	import ServiceIcon from "./ServiceIcon.svelte";

    $: disabled = false;
    $: loading = false;
    $: status = {error: false, success: false};

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
    }   

    const handleSuccess = (payload: {detail: {token: string}}) => { 
        $form.hcaptchaResponse.change(payload.detail.token);
        $form.hcaptchaResponse.touched = true;
        $form.touched = true;
    };

    const handleError = () => {
        console.log('error occurred');
        $form.hcaptchaResponse.change('');
        $form.hcaptchaResponse.touched = true;
        $form.touched = true;
    }
</script>

<p>Form Name: {$form.name.valid}</p>
<p>Form Email: {$form.email.valid}</p>
<p>Form Phone: {$form.phone.valid}</p>
<p>Form Company {$form.company.valid}</p>
<p>Form Message: {$form.message.valid}</p>
<p>Form Hcaptcha: {$form.hcaptchaResponse.valid}</p>

<div>
    <div class="mb-4 flex flex-col items-center rounded-md bg-white py-6">
        <div class="flex">
            <ServiceIcon icon="phone" height="60px" />
            <div>
                <p class="text-center text-xl md:text-2xl font-bold">Call or text</p>
                <p class="text-center text-lg md:text-xl font-medium mb-3">Mon &ndash; Fri &nbsp; 9AM &ndash; 5PM</p>
            </div>
        </div>

        <p class="text-center text-2xl md:text-3xl font-bold">+1 (207) 952-3892</p>

        <MediaQuery query="(max-width: 800px)" let:matches>
            {#if matches}
                <a class="button button-blue mt-4" href="tel:+12079523892">Call Now</a>
            {/if}
        </MediaQuery>
    </div>

    <div class="mb-6">
        <p class="text-center text-lg md:text-xl font-medium">&mdash; or, send us a message below &mdash;</p>
    </div>

    <form method="POST" on:submit|preventDefault={handleSubmit} use:form>
        <fieldset class="flex flex-col gap-4 max-w-96 w-full" {disabled}>
            {#if status.error || status.success}
                <div 
                    class:bg-red-500={status.error}
                    class:bg-green-500={status.success}
                    class="text-white p-2 rounded-md max-w-96 w-full"
                >
                    {#if status.success}
                        Thank you for your submission!
                    {/if}
                    {#if status.error}
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
</div>