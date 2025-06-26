import generateUID from "@/utils/uuid.ts";


type Card = {
    img: string
    name: string
    id: string
    icon: string
}
const projectCards: Card[] = [
    {
        img: '/01hero.jpg',
        name: 'Spotify',
        icon: "co-trello",

        id: generateUID('project-card')
    },
    {
        img: '/02hero.jpg',
        name: 'Trello',
        icon: "bi-spotify",

        id: generateUID('project-card')
    },
    {
        img: '/03hero.jpg',
        name: 'Portfolio',
        icon: "bi-file-earmark-person",

        id: generateUID('project-card'),
    }
]
export default projectCards