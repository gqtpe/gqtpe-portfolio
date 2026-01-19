import ava from "@/assets/img/profile-compressed.jpg";
import {aboutSVGs} from "@/assets/svg";
import {socials} from "@/app/links.ts";

type AboutPage = {
    info: InfoPage
    stack: string[]
}
export type Cards = {
    id: string
    title: string
    period: string
    body: string
}[]
export type InfoPage = {
    ava: string
    icons: {
        [key: string]:{
            icon: string
            link: string
        }
    }
    hero: string
    subtitles: string[]
    cards: {
        experience: Cards
        education: Cards
    }
}
const aboutPage: AboutPage = {
    info: {
        ava: ava,
        icons: socials,
        hero: "i'm Nursain Temirtas",
        subtitles: [
           "I'm a front-end developer with a strong foundation in JavaScript and a year of practical experience delivering real"," projects. I work confi dently with React, TypeScript, Vite, Redux Toolkit, and Vue, and I build applications with a focus","on architecture, performance, clean structure, and scalability.",
           "I’m comfortable working across the full development process thanks to my experience with Node.js and setting up"," simple back-end services. I pay attention to code quality — I write tests (TDD/BDD), use Storybook, and design","reusable components.",
           "I stay curious, constantly learn, and enjoy discussing ideas with the team to fi nd the most efficient and elegant","solutions. I’m open-minded, proactive, and focused on product quality."
        ],
        cards: {
            experience: [
                {
                    id: crypto.randomUUID(),
                    title: "Freelance",
                    period: "may. 2024 - jan.2025",
                    body: "\t Frontend developer\n" +
                        "• Implemented responsive UI layouts based on Figma designs.\n" +
                        "• Created interface animations.\n" +
                        "• Set up and confi gured projects from scratch.\n" +
                        "• Performed client-side performance optimization.\n" +
                        "• Wrote modular and unit tests.\n" +
                        "Frameworks and Libraries:TypeScript, Vue, Pinia, Jest, Axios, React, Redux/Redux Toolkit, Chart.js, Vite, ElementPlus, Storybook.",
                },
                {
                    id: crypto.randomUUID(),
                    title: "G108 Cargo",
                    period: "Apr.2025 - Aug.2025",
                    body: "\t Frontend developer\n" +
                        "• Set up and confi gured projects from scratch.\n" +
                        "• Implemented responsive UI layouts based on Figma designs.\n" +
                        "• Performed client-side performance optimization.\n" +
                        "• Managed user authorization and authentication(OAuth2, KeyCloak)\n" +
                        "• Developed data-driven features by integrating with RESTful APIs and managing application state (Tanstack)." +
                        "Frameworks and Libraries:TypeScript, React, Tanstack, Tailwind, Ant Design, Jest, Storybook, Vite.",
                },
            ],
            education: [
                {
                    id: crypto.randomUUID(),
                    title: "NKZU",
                    period: "sep. 2022 - may. 2026",
                    body: "Bachelor’s degree in Informatics Engineering.\nGPA:3.2\n Gained expertise in engineering and computational mathematics with a specialization in computation, focusing on numerical methods, optimization algorithms, data analysis, and mathematical modeling, alongside a strong foundation in networking basics (OSI model, routing, switching), low-level programming fundamentals (C and Assembly basics), and higher mathematics including linear algebra, calculus, probability, and statistics.",
                }
            ],
        }
    },
    stack: aboutSVGs
}
export default aboutPage;