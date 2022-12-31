<script lang="ts">
   export let width: number | string | null | undefined = undefined;
   export let height: number | string | null | undefined = undefined;
   export let variant: 'blue' | 'white' = 'blue';
   $: [blue, white] = [variant === 'blue', variant === 'white']
</script>


<svg
   {width}
   {height}
   class="transition-colors"
   class:text-brand={blue}
   class:text-white={white}
   viewBox="0 0 14 11"
   version="1.1"
   xmlns="http://www.w3.org/2000/svg"
>
  <path
     d="M 0,0 C 3.386228,0.313678 5.895965,1.497744 5.701526,2.161363 5.611366,2.469083 5.312929,2.481018 4.241336,2.959078 -4.0972,6.671426 6.712862,7.210046 7.652134,11 H 14 C 10.190009,4.790468 1.298978,6.738209 6.484431,3.972884 12.343922,1.076598 1.5560283,0.0813871 5e-6,4.7e-5 Z"
     style="fill:currentColor;"
   />
</svg>

