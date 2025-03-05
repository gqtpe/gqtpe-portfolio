
export type Image = {
    url: string
    id: number
    title?: string
}
export type Pill =
    "react"
    | "redux"
    | "vue"
    | "mui-material"
    | "typescript"
    | "jest"
    | "rest-api"
    | "storybook"
    | "chromatic"
    | "redux-toolkit"
    | "axios"
    | "react-router-dom"
    | "open-auth"
    | "spotify-dashboard"
    | "scss"
    | "tailwind"
    | "toasts"
    | "vite"
    | "vitest"
    | "ES"
    | "vue-router"
    | "motion"
    | "vercel"
    | "matter-js"
export type Project = {
    title: string
    description: string
    id: string
    icon: string
    links: {
        url?: string
        path?: string
        github?: string
    },
    images?: Image[]
    pills?: Pill[]

}
export type ProjectName = "trello" | "portfolio" | "spotify"
export type Projects = {
    [key in ProjectName]: Project
}