import generateUID from "@/utils/uuid.ts";


type Card = {
    img: string
    name: string
    subtitle: string
    id: string
    icon: string
    year: number
    path: string
}
const projectCards: Card[] = [
    {
        img: '/01hero.jpg',
        name: 'Spotify',
        subtitle: 'Project based on Spotify Web API',
        icon: "bi-spotify",
        path: '/project/spotify',
        year: 2024,
        id: generateUID('project-card')
    },
    {
        img: '/02hero.jpg',
        name: 'Trello',
        subtitle: 'react2',
        icon: "co-trello",
        path:'/project/trello',
        year: 2024,
        id: generateUID('project-card')
    },
    {
        img: '/04hero.jpg',
        name: 'Portfolio',
        subtitle: 'react3',
        icon: "bi-file-earmark-person",
        path: '/project/portfolio',
        year: 2025,
        id: generateUID('project-card'),
    },
    {
        img: '/03hero.jpg',
        name: 'socila',
        subtitle: 'react4',
        icon: 'md-people-round',
        path: '/project/socila',
        year: 2023,
        id: generateUID('project-card')
    }
]
export default projectCards