'use client'

import Link from "next/link";
import Image from 'next/image'
import Logo from '../../../../public/Logo/92sLogo.jpg';
import { signOut } from "next-auth/react";

const links = [
    { name: "Dashboard", href: "/protected/dashboard", className: 'fa-solid fa-house' },
    { name: "Orders", href: "/protected/orders", className: "fa-solid fa-list" },
    { name: "Assets", href: "/protected/assets", className: "fa-solid fa-warehouse" },
];

const NavBar = () => {
    return (
        <>
            <div>
                <Image
                    src={Logo}
                    alt="92s logo"
                    width={0}
                    height={0}
                    priority
                />
            </div>
            {links.map((link) => {
                return (
                    <div className="h-12 flex items-stretch w-full rounded-lg my-1 bg-gray-100 hover:bg-sky-100">
                        <Link
                            key={link.name}
                            className="flex grow justify-center items-center gap-3"
                            href={link.href}>
                            <i className={link.className}></i>
                            {link.name}
                        </Link>
                    </div>
                )
            })}
            <div className="h-auto w-full grow rounded-md bg-gray-100 my-1"></div>
            <div className="h-12 flex justify-center w-full rounded-lg my-1 bg-gray-100 hover:bg-sky-100">
                <button className="grow" onClick={signOut}>Sign Out</button>
            </div>
        </>
    )
}

export default NavBar;