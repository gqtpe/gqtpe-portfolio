import generateUID from "@/shared/helpers/uuid.ts";


type Card = {
    img: string
    title: string
    subtitle: string
    id: string
    icon: string
    year: number
    category: string
    path: string
}
const projectCards: Card[] = [
    {
        img: '/01hero.jpg',
        title: 'Spotify',
        subtitle: 'Project based on Spotify Web API',
        icon: "bi-spotify",
        path: '/project/spotify',
        year: 2024,
        category: "Web Design",
        id: generateUID('project-card')
    },
    {
        img: '/02hero.jpg',
        title: 'Trello',
        subtitle: 'react2',
        icon: "co-trello",
        path:'/project/trello',
        year: 2024,
        category: "Web Design",
        id: generateUID('project-card')
    },
    {
        img: '/04hero.jpg',
        title: 'Portfolio',
        subtitle: 'react3',
        icon: "bi-file-earmark-person",
        path: '/project/portfolio',
        year: 2025,
        category: "Web Design",
        id: generateUID('project-card'),
    },
    {
        img: '/03hero.jpg',
        title: 'socila',
        subtitle: 'react4',
        icon: 'md-people-round',
        path: '/project/socila',
        year: 2023,
        category: "Web Design",
        id: generateUID('project-card')
    }
]
export default projectCards