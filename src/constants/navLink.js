
const { Home_Route, About_Route, Contact_Route, Products_Route, Login_Route } =require( "./routes");

export const navLink = [
    {
        title: "Home",
        route: Home_Route,
    },
    {
        title: "About",
        route: About_Route,
    },
    {
        title: "Contact",
        route: Contact_Route,
    },
    {
        title: "Products",
        route: Products_Route,
    },
    // {
    //     title: "login",
    //     route: Login_Page,
    // },
];