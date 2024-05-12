export type SectionProps = {
    title: string
    url: string
    location: {
        city: string
        country: string
    } | null
    items: SectionItemProps[]
}

export type SectionItemProps = {
    title: string
    duration: {
        start: string
        finish: string
    }
    description: string
}