<script lang="ts">
    export let name: string;
    export let type: string | undefined = undefined;
    export let label: string | undefined = undefined;
    export let required: boolean = false;
</script>

<div>
    {#if label}
        <label for={name}>
            {label}
        </label>
    {/if}
    <input {type} {name} id={name} {required} />
</div>