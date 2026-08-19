export interface InteractiveClip {
    id: string
    title: string
    label: string
    src: string
    description: string
}

export interface ProjectDecision {
    question: string
    reason: string
    implementation: string
}

export interface TechnologyChoice {
    name: string
    reason: string
}

export interface CaseStudy {
    id: string
    number: string
    category: string
    title: string
    subtitle: string
    period: string
    summary: string
    decisions: ProjectDecision[]
    choices: TechnologyChoice[]
    result: {
        value: string
        label: string
    }
    media?: InteractiveClip[]
    resumeBullets: string[]
}
