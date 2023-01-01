<script lang="ts">
    export let name: string;
    export let type: string | undefined = undefined;
    export let label: string | undefined = undefined;
    export let placeholder: string | undefined = undefined;
    export let required: boolean = false;
</script>

<div class="flex flex-col gap-0.5 max-w-[400px]">
    {#if label}
        <label for={name}>
            <span>{label}</span>
            {#if required}
                <span class="text-red-600">*</span>
            {/if}
        </label>
    {/if}
    <input
        class="rounded-sm p-1 border border-gray-200 w-full"
        {type}
        {name}
        id={name} 
        {required} 
        {placeholder}
    />
</div>