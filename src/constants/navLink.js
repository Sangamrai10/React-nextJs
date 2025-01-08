
const { Home_Page, About_Page, Contact_Page, Blog_Page } =require( "./routes");

export const navLink = [
    {
        title: "Home",
        route: Home_Page,
    },
    {
        title: "About",
        route: About_Page,
    },
    {
        title: "Contact",
        route: Contact_Page,
    },
    {
        title: "Blogs",
        route: Blog_Page,
    },
];