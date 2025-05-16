import { navLink } from "@/constants/navLink";
import Link from "next/link";
import React from "react";
import hamroPasal from "@/assets/hamroPasal.png";
import { Home_Page, Login_Page } from "@/constants/routes";
import config from "@/config/config";

function Header() {
  return (
    <div className="shadow sticky top-0 bg-primary-50 dark:bg-gray-800 dark:text-white">
      <div className="w-full">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            {/* logo */}
          <div className="flex flex-row items-center justify-between p-2 ">
            <Link href={`${Home_Page}`} className="ps-4 md:ps-0 text-primary-500">
              {/* <img
                src={hamroPasal.src}
                alt="logo"
                className="w-16 h-16 rounded-full"
              /> */}
              {config.appName}
            </Link>
          </div>

          {/* navigation  */}
          <nav className="px-2 flex-col flex-grow hidden pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
            {navLink.map((navlink) => {

                // check if user is authentic 
              // if (navlink.isAuth && !user)
              //   return <div key={navlink.route}></div>;

              return (
                <div key={navlink.route} className="relative px-2">
                  <Link
                    key={navlink.title}
                    className="p-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-primary-100 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href={navlink.route}
                  >
                    {navlink.title}
                  </Link>
                </div>
              );
            })}
          </nav>
          <Link
            href={`${Login_Page}`}
            className="p-1 px-2 rounded text-white text-sm bg-primary-500"
          >
            LOGIN
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
