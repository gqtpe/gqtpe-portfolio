export type Link = {
    id: number
    title: string
    path: string
    target?: string
}
export const navbarLinks: Link[] = [
    {id: 0, title: "Home",target:"#home", href: "/"},//todo: disable button if /about route
    {id: 1, title: "About", target: "#about", href:'/about'},//todo: disable on homePage route
    {id: 2, title: "Projects", href: "/projects"},
    {id: 3, title: "Contacts", href: "/contacts"},
];