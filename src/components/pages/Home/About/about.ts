import ava from "@/assets/img/profile-compressed.jpg";
import { aboutSVGs } from "@/assets/svg";
import {links} from "@/app/links.ts";
type AboutPage ={
    info: InfoPage
    stack: string[]
}
export type InfoPage = {
    ava: string
    icons: {
        name: string
        fill: string
        link: string
    }[]
    hero: string
    subtitles: string[]
    cards: {
        cardTitle: string
        title: string
        period: string
        body: string
    }[]
}
const aboutPage:AboutPage = {
    info:{
        ava: ava,
        icons: [
            {fill: "#181717", name: "bi-github",link: links.github},
            {fill: "#0A66C2", name: "bi-linkedin",link: links.linkedin},
            {fill: "#0088CC", name: "bi-telegram",link: links.telegram},
            {fill: "#AD2C27", name: "co-codewars",link: links.codewars},
            /*{fill: "#E4405F", name: "bi-instagram",link: links.instagram},*/
        ],
        hero: "i'm Nursain Temirtas",
        subtitles: [
            "I'm Nursain Temirtas — a Front-end Developer with one year of freelance experience. I work with modern technologies like React, Vite, TypeScript, and Redux Toolkit, building scalable, well-structured, and maintainable applications.",
            "I care about user experience, performance, and clean architecture. I also create smooth, thoughtful web animations using GSAP and CSS, enhancing interfaces without sacrificing usability.",
            "I'm an open-minded and proactive team player who enjoys learning, discussing ideas, and finding the best solutions together. I'm constantly improving and passionate about creating high-quality products."
        ],
        cards: [
            {
                cardTitle: "experience",
                title: "Upwork",
                period: "2023 - current",
                body: "Developed web applications using React and Vite. Independently designed architecture, integrated APIs, and optimized performance. Worked with TypeScript, Redux Toolkit, and testing (TDD/BDD)",
            },
            {
                cardTitle: "education",
                title: "Kozybaev-Arizona University",
                period: "2022 - current",
                body: "Gained expertise in engineering and computational mathematics, focusing on numerical methods, optimization algorithms, data analysis, and mathematical modeling.",
            }
        ],

    },
    stack: aboutSVGs
}
export default aboutPage;