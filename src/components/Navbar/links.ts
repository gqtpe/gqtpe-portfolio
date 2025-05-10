type Links = {
    id: number
    title: string
    href: string
    target: string
}
export const navbarLinks: Links[] = [
    {id: 1, title: "Home", target: "#home", href: "/"},
    {id: 2, title: "About", target: "#about", href: "/about"},
    {id: 3, title: "Projects",target: "#projects", href: "/projects"},
    {id: 4, title: "Contacts",target: "#contacts", href: "/contacts"},
];