<script lang="ts">
    import type { SectionItemProps } from "$lib/section/Types";

    export let props: SectionItemProps
</script>

<div class="basic">
    <h2>{props.title}</h2>
    {props.duration.start} - {props.duration.finish}<br/>
    {props.description} 
</div>


<style >
    .basic {
        position: fixed;
        top: 5%;
        bottom: 5%;
        left: 10%;
        right: 10%; 
        background-color: blue;
    }
</style>