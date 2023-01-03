<script lang="ts">
    export let width: string | number | null | undefined = '24px';
    export let height: string | number | null | undefined  = '24px';
    let className: string | null | undefined;
    export {className as class};
</script>

<svg
  {width}
  {height}
  class={className}
  viewBox="0 0 24 24"
>
  <slot></slot>
</svg>