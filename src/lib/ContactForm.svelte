<script lang="ts">
    import { useForm, Hint, required, pattern, email } from "svelte-use-form";
	import { phoneValidator } from "./constants";
    import { Circle } from 'svelte-loading-spinners';
    import HCaptcha from 'svelte-hcaptcha';
    import { PUBLIC_HCAPTCHA_SITEKEY } from '$env/static/public';
	import MediaQuery from "svelte-media-queries";

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

<div>
    <form method="POST" on:submit|preventDefault={handleSubmit} use:form>
        <fieldset class="flex flex-col gap-4 w-full text-midnight" {disabled}>
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
            <div class="grid lg:grid-cols-2 gap-4">
            <div>
                <label for="name" class="text-white">
                    Name
                    <span class="text-red-500">*</span>
                </label>
                <input 
                    class="textbox" 
                    class:invalid={($form.touched || $form.name.touched || $form.submitted) && !$form.name.valid}
                    name="name"
                    id="name"
                    placeholder="John Q. Sample"
                />
            </div>
            <div>
                <label for="email" class="text-white">
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
                <Hint for="email" on="email" class="hint">
                    { $form.email.value.length === 0 ? '' : 'E-mail is in an invalid format.'}
                </Hint>
            </div>
            <div>
                <label for="phone" class="text-white">
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
                <label for="company" class="text-white">
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
        </div>

        <div>
            <label for="message" class="text-white">
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

        <div class="flex flex-col md:flex-row items-center gap-4 m-auto">
            <div>
                <input name="hcaptchaResponse" id="hcaptchaResponse" hidden />
                <HCaptcha
                    bind:this={hcaptcha}
                    sitekey={PUBLIC_HCAPTCHA_SITEKEY}
                    on:success={handleSuccess}
                    on:error={handleError}
                />
            </div>
    
                <button
                    class="button white outlined"
                    disabled={!$form.valid}
                >
                    {#if !loading}
                        Submit Now
                    {/if}
                    {#if loading}
                        <Circle size="16" color="currentColor" />
                    {/if}
                </button>
        </div>
        </fieldset>
    </form>
</div>