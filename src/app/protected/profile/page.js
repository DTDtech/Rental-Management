'use client'
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react"
import Link from 'next/link'


const ProfilePage = () => {

    const { data: session, status } = useSession();

    return (
        <div>
            <div>
                <div className="text-center">
                    <span>Hello {session?.user?.name}</span>
                    <h1>Welcome to the Profile Page..</h1>
                    <button onClick={() => signOut({callbackUrl: '/auth/login'})}> Signout </button>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage;