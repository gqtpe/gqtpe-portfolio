import ava from "@/assets/img/profile-compressed.png";
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
            "I am a Front-end Developer focused on building clean,"," high-performance, and scalable user interfaces."," My expertise lies within the React and Vue.js ecosystems, allowing me to approach project architecture with flexibility and", "precision. I have hands-on experience developing seamless SPAs using Next.js and integrating front-end layers", "with Laravel via Inertia.js to deliver robust web applications.",

            "My toolkit includes a wide range of UI solutions, from utility-first Tailwind CSS and Shadcn UI to comprehensive", "component libraries such as Material UI,"," Element Plus, Chakra UI, and Ant Design. I place a strong emphasis on", "state management, effectively leveraging"," Zustand, TanStack Query, and Redux (including Redux Toolkit) to", "handle complex business logic and data synchronization.",

            "I view technology as a means to solve problems, which is why I am not confined to a single stack."," I adapt quickly to new frameworks and am always ready to jump into different tech environments to support the team whenever needed."," My background in electronics and engineering design has instilled in me a systematic mindset,", "enabling me to dissect complex systems and find optimal solutions rapidly."],
        //todo: russian switch i18
    //     Я Front-end разработчик, который специализируется на создании чистых, производительных и масштабируемых интерфейсов. В моей работе я опираюсь на глубокое понимание экосистем React и Vue.js, что позволяет мне гибко подходить к архитектуре каждого проекта. Я имею опыт разработки бесшовных SPA на Next.js и интеграции фронтенда с Laravel через Inertia.js, создавая быстрые и надежные веб-приложения.
    //
    //         В моем арсенале — работа с широким спектром UI-решений: от гибкого Tailwind CSS и Shadcn UI до комплексных библиотек вроде Material UI, Element Plus, Chakra UI и Ant Design. Я уделяю большое внимание управлению состоянием данных, свободно используя Zustand, TanStack Query и Redux (включая Redux Toolkit), чтобы обеспечивать стабильную работу приложений со сложной бизнес-логикой.
    //
    // Для меня технологии — это прежде всего инструменты для решения задач, поэтому я не ограничиваю себя одним стеком. Я легко адаптируюсь к новым фреймворкам и готов оперативно включиться в работу над проектом с другими технологиями, если команде требуется усиление. Мой бэкграунд в электронике и инженерном проектировании приучил меня к структурному мышлению и умению быстро разбираться в самых запутанных системах.
        cards: {
            experience: [
                {
                    id: crypto.randomUUID(),
                    title: "Freelance",
                    period: "May 2024 - Jan 2025",
                    body: "Frontend Developer\n" +
                        "• Developed responsive UI layouts from Figma with a focus on pixel-perfect implementation.\n" +
                        "• Built interactive interfaces using modern animation libraries and CSS transitions.\n" +
                        "• Initialized and configured project architectures from scratch (Vite, TypeScript).\n" +
                        "• Optimized client-side performance and asset loading for better Core Web Vitals.\n" +
                        "• Ensured code reliability by writing modular and unit tests."
                },
                {
                    id: crypto.randomUUID(),
                    title: "G108 Cargo",
                    period: "Apr 2025 - Aug 2025",
                    body: "Frontend Developer\n" +
                        "• Engineered complex data-driven features using TanStack Query for efficient server-state management.\n" +
                        "• Implemented secure user authorization and authentication flows via OAuth2 and Keycloak.\n" +
                        "• Leveraged comprehensive UI kits (Ant Design/Element Plus) to accelerate internal tool development.\n" +
                        "• Integrated RESTful APIs with strict TypeScript typing to ensure end-to-end data integrity.\n" +
                        "• Optimized application performance through code-splitting and efficient re-render patterns."
                },
                {
                    id: crypto.randomUUID(),
                    title: "Project-based / Freelance",
                    period: "Aug 2025 - Present",
                    body: "Frontend Developer\n" +
                        "• Building robust web applications using Laravel, Inertia.js, and React for seamless full-stack integration.\n" +
                        "• Implementing scalable state management solutions using Zustand and Redux Toolkit.\n" +
                        "• Developing modular UI components with Tailwind CSS and Shadcn UI for high reusability.\n" +
                        "• Migrating legacy features to modern stacks while maintaining system stability and performance.\n" +
                        "• Collaborating on system architecture to support complex business logic and real-time data synchronization."
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