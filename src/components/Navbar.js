"use client";
import { navLink } from '@/constants/navLink'
import { Home_Page } from '@/constants/routes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function Navbar() {
    const pathname = usePathname()

    return (
        <nav className="md:w-1/2 flex justify-between  gap-4 pt-1" role="navigation">
            {navLink.map((link, index) => {
                const isActive = link.route == Home_Page ?
                    pathname === link.route :
                    pathname.startsWith(link.route)
                return (
                    <Link
                        href={link.route}
                        key={index}
                        className={isActive ? "text-blue-500" : "text-black dark:text-white"}>
                        {link.title}
                    </Link>
                );
            })}
        </nav>
    )
}
