"use client"

import { Nav } from "./ui/nav";
import animations from "./ui/css/animations.module.css";
import Link from 'next/link';
import Background from "./ui/backgrounds/background1";
import { useEffect, useState } from "react";

export default function Page() {
  const [href, setHref] = useState('#');

  useEffect(()=>localStorage.getItem('token')?setHref("/dashboard"):setHref("/signup"),[]);
  return (
    <div className='h-screen poppins-regular flex flex-col w-100'>
      <Background />
      <Nav className={animations.fadein} />

      <div className={`flex flex-grow items-center justify-center flex-col ${animations.fadein}`}>
        <h1 className="text-6xl font-bold text-white mb-6">Welcome to Dockify</h1>
        <p className="text-gray-400 mb-6 text-xl">Free docker containers for all your hosting dependencies.</p>
        <div className="flex items-center justify-center flex-row">
          <Link href={href}>
            <button className="mt-6 rounded bg-purple-800 px-6 py-3 text-white hover:bg-purple-900 transition duration-300 shadow-lg mr-5">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
