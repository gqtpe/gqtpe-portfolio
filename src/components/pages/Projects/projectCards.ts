import generateUID from "@/utils/uuid.ts";


type Card = {
    img: string
    name: string
    subtitle: string
    id: string
    icon: string
    year: number
}
const projectCards: Card[] = [
    {
        img: '/01hero.jpg',
        name: 'Spotify',
        subtitle: 'react1',
        icon: "co-trello",
        year: 2024,
        id: generateUID('project-card')
    },
    {
        img: '/02hero.jpg',
        name: 'Trello',
        subtitle: 'react2',
        icon: "bi-spotify",
        year: 2024,
        id: generateUID('project-card')
    },
    {
        img: '/04hero.jpg',
        name: 'Portfolio',
        subtitle: 'react3',
        icon: "bi-file-earmark-person",
        year: 2025,
        id: generateUID('project-card'),
    },
    {
        img: '/03hero.jpg',
        name: 'socila',
        subtitle: 'react4',
        icon: 'md-people-round',
        year: 2023,
        id: generateUID('project-card')
    }
]
export default projectCards