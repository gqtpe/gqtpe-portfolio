export type Link = {
    id: number
    title: string
    path: string
    target?: string
}
export const navbarLinks: Link[] = [
    {id: 0, title: "Home",target:"#home", path: "/"},//todo: disable button if /about route
    {id: 1, title: "About", target: "#about", path:'/about'},//todo: disable on homePage route
    {id: 2, title: "Projects", path: "/projects"},
    {id: 3, title: "Contacts", path: "/contacts"},
];