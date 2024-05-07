import React from "react";
import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import NavBar from '@/app/containers/nav-bar/nav-bar'


export default async function PrivateLayout({ children }) {
    const session = await getServerSession(Options)

    if (!session?.user) redirect('/auth/login')

    return (
        <>
            <div className="flex h-screen">
                <div className="float-left w-64 flex flex-col bg-white">
                    <NavBar />
                </div>
                <div className="float-left w-full flex justify-center p-6">
                    {children}
                </div>
            </div>
        </>
    )

}