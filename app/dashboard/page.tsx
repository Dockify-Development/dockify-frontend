"use client"

import { Nav } from "../ui/nav";
import animations from "../ui/css/animations.module.css";
import Link from 'next/link';
import Background from "../ui/backgrounds/background1";
import { useEffect, useState } from "react";

export default function Page() {
    const [href, setHref] = useState('#'); //for testing
  
    useEffect(()=>localStorage.getItem('token')?setHref("/dashboard"):setHref("/signup"),[]);
    return (
        <div className='h-screen poppins-regular flex flex-col w-full'>
            <Background />
            <Nav className={animations.fadein} />
            <div className={`flex flex-col items-start my-6 ml-8 text-3xl justify-center h-full gap-8 ${animations.fadein}`}>
                <Link href={href}>
                <button className="bg-0 px-4 py-2 text-white hover:text-purple-600 transition duration-300">
                    Instances
                </button>
                </Link>
                <Link href={href}>
                <button className="bg-0 px-4 py-2 text-white hover:text-purple-600 transition duration-300">
                    Shop
                </button>
                </Link>
                <Link href={href}>
                <button className="bg-0 px-4 py-2 text-white hover:text-purple-600 transition duration-300">
                    Support
                </button>
                </Link>
                <Link href={href}>
                <button className="bg-0 px-4 py-2 text-white hover:text-purple-600 transition duration-300">
                    placeholder
                </button>
                </Link>
                <Link href={href}>
                <button className="bg-0 px-4 py-2 text-white hover:text-purple-600 transition duration-300">
                    placehoder
                </button>
                </Link>
            </div>
        </div>
    );
}