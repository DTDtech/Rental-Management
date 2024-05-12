'use server'

import { redirect } from "next/navigation"
import { getServerSession } from "next-auth"
import { Options } from "./api/auth/[...nextauth]/route"

const HomePage = async () => {
    const session = await getServerSession(Options)

    if (!session?.user) {
        redirect('/auth/login')
    } 
    else {
        redirect('/protected/dashboard')
    }
    return (
        <>
        </>
    )
}

export default HomePage;