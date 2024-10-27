"use client"

import { useState } from "react";
import Background from "../ui/backgrounds/background3";
import { Nav } from "../ui/nav";
import { login } from "../lib/login";

export default function Page() {
  return (
    <div className='h-screen poppins-regular flex flex-col'>
      <Background />
      <Nav/>

      <div className='flex flex-grow items-center justify-center flex-col'>
        <div className='bg-white rounded-lg shadow-lg p-8 w-96'>
          <h1 className="text-center text-3xl">Info</h1>
        </div>
      </div>
    </div>
  );
}
