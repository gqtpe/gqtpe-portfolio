import {links} from "../../../app/links.ts";



const projects: Projects = {
    ['trello']:{
        id: 'trello',
        title: 'Trello',
        description: 'Todolist is a pet project for task management, created using modern web technologies. This project allows for convenient task management and supports user authorization.',
        icon: "co-trello",
        preview: links.trello,
        path: '/project/trello'
    },
    ['spotify']:{
        id: 'spotify',
        title: 'Spotify',
        description: 'A Spotify clone built with Next.js, offering a similar user experience to the original Spotify platform. This project integrates with the Spotify Web API to provide music streaming, playlists, and user interaction features.',
        icon: "bi-spotify",
        preview: links.spotify,
        path: '/project/spotify'
    },
    ['portfolio']:{
        id: 'portfolio',
        title: 'Portfolio',
        description: ' A Portfolio application build with Vue.',
        icon: "bi-file-earmark-person",
    },
}
export default projects;