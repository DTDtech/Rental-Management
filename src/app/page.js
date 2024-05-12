'use server'

import { redirect } from "next/dist/server/api-utils"

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