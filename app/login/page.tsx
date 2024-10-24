"use client"

import { useState } from "react";
import Background from "../ui/backgrounds/background2";
import { Nav } from "../ui/nav";
import { login } from "../lib/login";

export default function Page() {
    const [formData, setFormData] = useState({
        identifier: "",
        password: ""
      });
    
      const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
          let x = await login(formData);
          console.log("Login successful");

        } catch (error) {
          console.error("Login failed", error);
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
      <Nav/>

      <div className='flex flex-grow items-center justify-center flex-col'>
        <form className="bg-white rounded-lg shadow-lg p-8 w-96" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold text-gray-700 mb-6 text-center">Login</h1>
          <div className="mb-4">
            <label htmlFor="identifier" className="block text-sm font-medium text-gray-700">
              Username/Email
            </label>
            <input
              type="text"
              id="identifier"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username or email"
              value={formData.identifier}
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
              onChange={handleChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mt-6 rounded bg-purple-800 px-6 py-3 text-white hover:bg-purple-900 transition duration-300 shadow-lg w-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
