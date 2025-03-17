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
            'storybook',
            'redux-toolkit',
            'tanstack-tables',
            'vitest',
            'react-router-dom',
            'auth-token',
            'player',
            'search',
        ]
    },
    ["portfolio"]: {
        id: 3,
        title: 'Portfolio',
        description: ' A Portfolio application build with Vue.',
        icon: "bi-file-earmark-person",
        links: {
            github: links.spotifyGithub
        },
        images: [],
        pills:[
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