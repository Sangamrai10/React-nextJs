import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Home_Page, Products_Page } from "@/constants/routes";


export const metadata = {
  title: "First nextJs app",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="bg-gray-100"> 
          <div className="md:container flex mx-auto justify-between items-center h-16 relative">

            {/* redirect to Home_Page */}
            <Link href={`${Home_Page}`}>LOGO</Link>

            {/* navigation */}
            <Navbar />

            {/* login page  */}
            <Link href={'/login'}>LOGIN</Link>
            
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
