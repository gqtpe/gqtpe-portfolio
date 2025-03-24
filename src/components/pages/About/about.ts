import ava from "@/assets/img/ava_corrected.png";
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
    subtitle: string
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
            {fill: "#E4405F", name: "bi-instagram",link: links.instagram},
            {fill: "#0088CC", name: "bi-telegram",link: links.telegram},
            {fill: "#0A66C2", name: "bi-linkedin",link: links.linkedin},
            {fill: "#181717", name: "bi-github",link: links.github},
            {fill: "#AD2C27", name: "co-codewars",link: links.codewars},
        ],
        hero: "i'm Nursain Temirtas",
        subtitle: "A Front-end developer with one year of freelance experience (1 year). I have strong skills in modern technologies like React, Vite, TypeScript, and Redux Toolkit. I build scalable and well-structured applications. I like learning new things, discussing ideas with the team, and finding the best solutions together. I also have some Back-end experience, which helps me understand the full development process and work better with Back-end developers. I'm a constantly developing person, open-minded and dedicated.",
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