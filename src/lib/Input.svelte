<script lang="ts">
    export let name: string;
    export let type: string | undefined = undefined;
    export let label: string | undefined = undefined;
    export let placeholder: string | undefined = undefined;
    export let required: boolean = false;
    export let multiline: boolean = false;
</script>

<div class="flex flex-col gap-0.5 w-full">
    {#if label}
        <label for={name}>
            <span>{label}</span>
            {#if required}
                <span class="text-red-600">*</span>
            {/if}
        </label>
    {/if}
    {#if multiline}
        <textarea
            class="textbox resize-none h-40"
            {name}
            id={name} 
            {required} 
            {placeholder}
        />
    {/if}
    {#if !multiline}
        <input
            class="textbox"
            {type}
            {name}
            id={name} 
            {required} 
            {placeholder}
        />
    {/if}
</div>