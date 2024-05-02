import React from "react";
import { getServerSession } from "next-auth";
import { Options } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";


export default async function PrivateLayout({ children }) {
    const session = await getServerSession(Options)

    if (!session?.user) redirect('/auth/login')

    return (
        <div className="flex h-screen">
            <div className="float-left flex-1 w-1/12 border-2">
                <p>Nav holder</p>
            </div>
            <div className="float-left w-11/12">
                {children}
            </div>
        </div>)

}