
const { Home_Page, About_Page, Contact_Page } =require( "./routes");

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
];