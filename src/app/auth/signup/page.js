'use client'
import React, { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from 'next/image'
import Logo from '../../../../public/Logo/92sLogo.jpg';

const SignUpPage = () => {

    const router = useRouter();

    const emailRef = useRef("");
    const usernameRef = useRef("");
    const passwordRef = useRef("");

    const [validationError, setValidationError] = useState("")

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("/api/saveUser", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: emailRef.current,
                    username: usernameRef.current,
                    password: passwordRef.current
                })
            });
            const data = await response.json();
            if (data.success === true) {
                router.push('/auth/login')
            }
            else {
                setValidationError(data.message);
            }
        }
        catch (error) {
            console.log(error)
        }
    };

    return (
        <div className='mx-auto max-w-2xl'>
            <div className="mt-10 grid sm:grid-cols-1 gap-y-5">
                <div className="mx-auto">
                    <Image
                        src={Logo}
                        alt="92s logo"
                        width={0}
                        height={0}
                        style={{ width: '200px', height: "auto" }}
                        priority
                    />
                </div>
            </div>

            <div className="grid sm:grid-cols-1">
                <h1 className="text-center mb-5 text-3xl poppins">Sign Up</h1>
                <form onSubmit={onSubmitHandler}>

                    <div>
                        <div className="grid grid-cols-subgrid gap-y-5">
                            <div className="mx-auto">
                                <label htmlFor='email' className='block text-sm font-medium leading-8 text-pianoBlack'> Email: </label>
                                <div className="flex w-96 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        placeholder="Enter email"
                                        className='flex-1 rounded-md shadow ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
                                        focus-within:ring-atomicPink pl-3 sm:text-sm sm:leading-8'
                                        onChange={(e) => {
                                            emailRef.current = e.target.value;
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="mx-auto">
                                <label htmlFor='username' className='block text-sm font-medium leading-8 text-pianoBlack'> Username: </label>
                                <div className="flex w-96 sm:max-w-md">
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        autoComplete="username"
                                        placeholder="Enter username"
                                        className='flex-1 rounded-md shadow ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
                                        focus-within:ring-atomicPink pl-3 sm:text-sm sm:leading-8'
                                        onChange={(e) => {
                                            usernameRef.current = e.target.value;
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="mx-auto">
                                <label htmlFor='password' className='block text-sm font-medium leading-8 text-pianoBlack'> Password: </label>
                                <div className="flex w-96 sm:max-w-md">
                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        autoComplete="new-password"
                                        placeholder="Enter password"
                                        className='flex-1 rounded-md shadow ring-1 ring-nimbusCloud focus:outline-none focus-within:ring-2 focus-within:ring-inset 
                                        focus-within:ring-atomicPink pl-3 sm:text-sm sm:leading-8'
                                        onChange={(e) => {
                                            passwordRef.current = e.target.value;
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="mx-auto mt-2">
                                <button type='submit' className='rounded-md shadow bg-atomicPink/50 hover:bg-lightPastelPurple focus:outline-none focus:ring-2 
                                focus:ring-lavender px-3 py-2 text-sm text-white'>
                                    Sign Up
                                </button>
                            </div>

                            <div className="mx-auto">
                                <p>{validationError}</p>
                            </div>

                            <div className='mx-auto '>
                                <Link href={"/auth/login"}><span> Already have an account? Login here! </span></Link>
                            </div>

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;