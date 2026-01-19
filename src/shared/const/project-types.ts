
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
    | "open-auth-v2"
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
    | "gh-pages"
    | "formik"
    | "feature-based"
    | "auth-token"
    | "custom-hooks"
    | "intersection-observer"
    | "tanstack-tables"
    | "player"
    | "search"
    | "vueuse/motion"
    | "splidejs"
export type ProjectLink = {
    url: string
    icon: 'bi-github' | 'bi-link-45deg'
    name: string
}
export type Project = {
    title: string
    description: string
    id: number
    links: ProjectLink[],
    images?: Image[]
    pills?: Pill[]

}
export type ProjectName = "trello" | "portfolio" | "spotify"
export type Projects = {
    [key in ProjectName]: Project
}