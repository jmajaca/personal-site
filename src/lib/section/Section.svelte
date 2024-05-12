<script lang="ts">
    import type { SectionProps } from "$lib/section/Types";
    import SectionItem from "$lib/section/SectionItem.svelte";

    export let props: SectionProps
</script>

<div>
   {#each props.items as item}
    <SectionItem props={item}/>
   {/each} 
</div>
