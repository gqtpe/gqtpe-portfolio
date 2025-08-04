import {links, projectImages} from "@/app/links";
import type {ProjectLink, Projects} from "@/components/pages/Projects/types";


const defaultLinks: { [key: string]: (url: string)=>ProjectLink } = {
    github:(url)=> ({
        icon: 'bi-github',
        name: 'Source Code',
        url,
    }),
    preview: (url:string)=>({
        icon: 'bi-link-45deg',
        name: 'Live Demo',
        url,
    })
}
const projects: Projects = {
    trello: {
        id: 1,
        title: 'Trello-Clone',
        description: 'Todolist is a pet project for task management, created using modern web technologies. This project allows for convenient task management and supports user authorization.',
        links: [
            defaultLinks.preview(links.trello),
            defaultLinks.github(links.trelloGithub),
        ],
        images: projectImages["trello"],
        pills: [
            'react',
            'redux',
            'react-router-dom',
            'typescript',
            'axios',
            'jest',
            'redux-toolkit',
            'storybook',
            'scss',
            'rest-api',
            'mui-material',
            'feature-based',
            'chromatic',
            'auth-token',
            "custom-hooks",
            'formik',
            'gh-pages',
        ]
    },
    spotify: {
        id: 2,
        title: 'Spotify-Clone',
        description: 'A Spotify clone built with Next.js, offering a similar user experience to the original Spotify platform. This project integrates with the Spotify Web API to provide music streaming, playlists, and user interaction features.',
        links: [
            defaultLinks.github(links.spotifyGithub),
            defaultLinks.preview(links.spotify),
        ],
        images: projectImages["spotify"],
        pills: [
            'react',
            'open-auth-v2',
            'typescript',
            'ES',
            'spotify-dashboard',
            'scss',
            'storybook',
            'intersection-observer',
            'toasts',
            'vite',
            'custom-hooks',
            'redux-toolkit',
            'tanstack-tables',
            'vitest',
            'react-router-dom',
            'auth-token',
            'player',
            'search',
        ]
    },
    portfolio: {
        id: 3,
        title: 'Portfolio',
        description: 'A portfolio application built with Vue and modern UI animations.,',
        links: [
            defaultLinks.github(links.portfolioGithub),
        ],
        images: [],
        pills: [
            'vue',
            'vue-router',
            'matter-js',
            'vueuse/motion',
            'tailwind',
            'typescript',
            'splidejs'
        ]
    },
}

export default projects;