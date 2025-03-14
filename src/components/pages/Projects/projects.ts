import {links, projectImages} from "@/app/links";
import type {Projects} from "@/components/pages/Projects/types";
const projects: Projects = {
    ["trello"]: {
        id: 1,
        title: 'Trello',
        description: 'Todolist is a pet project for task management, created using modern web technologies. This project allows for convenient task management and supports user authorization.',
        icon: "co-trello",
        links: {
            url: links.trello,
            path: '/project/trello',
            github: links.trelloGithub
        },
        images: projectImages["trello"]
    },
    ["spotify"]: {
        id: 2,
        title: 'Spotify',
        description: 'A Spotify clone built with Next.js, offering a similar user experience to the original Spotify platform. This project integrates with the Spotify Web API to provide music streaming, playlists, and user interaction features.',
        icon: "bi-spotify",
        links: {
            url: links.spotify,
            path: '/project/spotify',
            github: links.spotifyGithub
        },
        images: projectImages["spotify"]
    },
    ["portfolio"]: {
        id: 3,
        title: 'Portfolio',
        description: ' A Portfolio application build with Vue.',
        icon: "bi-file-earmark-person",
        links: {
            github: links.spotifyGithub
        },
        images: []
    },
}
export default projects;