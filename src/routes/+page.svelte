<script lang="ts">
    import Section from "$lib/section/Section.svelte";
    import type { SectionProps } from "$lib/section/Types"

    let props: SectionProps = {
        location: {
            city: "Zagreb",
            country: "Croatia"
        },
        title: "Work",
        url: "https://google.com",
        items: [
            {
                description: "desc",
                duration: {
                    start: "2010",
                    finish: "2020",
                },
                title: "role"
            }
        ]
    }
</script>


<Section props={props}/>