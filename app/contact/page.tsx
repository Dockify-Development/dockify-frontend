"use client"

import { useState } from "react";
import Background from "../ui/backgrounds/background2";
import { Nav } from "../ui/nav";
import { login } from "../lib/login";

export default function Page() {
  return (
    <div className='h-screen poppins-regular flex flex-col'>
      <Background />
      <Nav />

      <div className='flex flex-grow items-center justify-center flex-col'>


      </div>
    </div>
  );
}
