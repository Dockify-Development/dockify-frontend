"use client"

import Background from "../ui/backgrounds/background2";
import { Nav } from "../ui/nav";
import { signup } from "../lib/signup";
import React, { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await signup(formData);
      console.log("Signup successful");
    } catch (error) {
      console.error("Signup failed", error);
    }
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  return (
    <div className='h-screen poppins-regular flex flex-col'>
      <Background />
      <Nav />

      <div className='flex flex-grow items-center justify-center flex-col'>
        <form className="bg-white rounded-lg shadow-lg p-8 w-96" id="form" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold text-gray-700 mb-6 text-center" id="head">Signup</h1>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange} // Capture input changes
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mt-6 rounded bg-purple-800 px-6 py-3 text-white hover:bg-purple-900 transition duration-300 shadow-lg w-full"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}