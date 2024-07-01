import React from "react";
import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import NavBar from '@/app/containers/nav-bar/nav-bar'


export default async function PrivateLayout({ children }) {
    const session = await getServerSession(Options)

    if (!session?.user) {
        console.log("user not found");
        redirect('/auth/login');
    }

    return (
        <>
            <div className="flex h-screen">
                <div className="float-left flex flex-col w-64 bg-white sticky top-0">
                    <NavBar />
                </div>
                <div className="float-left w-full flex justify-center p-6">
                    {children}
                </div>
            </div>
        </>
    )

}