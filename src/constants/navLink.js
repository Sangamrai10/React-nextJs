
const { Home_Page, About_Page, Contact_Page, Products_Page, Login_Page } =require( "./routes");

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
        title: "Products",
        route: Products_Page,
    },
    // {
    //     title: "login",
    //     route: Login_Page,
    // },
];