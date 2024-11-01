"use client"

import Background from "../../components/ui/backgrounds/background2"
import { Nav } from "../../components/ui/nav"
import { signup } from "../lib/signup"
import React, { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function Component() {
  const searchParams = useSearchParams()

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: ""
  })
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")

  useEffect(() => {
    const status = searchParams.get("status")
    if (status === "success") {
      setMessage("Check your email for verification instructions!")
    }
  }, [searchParams])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError("")
    setMessage("")

    try {
      await signup(formData)
      console.log("Signup successful")
      
      window.location.href = `/signup?status=success#`
    } catch (error) {
      console.error("Signup failed", error)
      setError(error instanceof Error ? error.message : "An unexpected error occurred")
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  return (
    <div className="h-screen poppins-regular flex flex-col">
      <Background />
      <Nav />

      <div className="flex flex-grow items-center justify-center flex-col">
        <form className="bg-white rounded-lg shadow-lg p-8 w-96" onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold text-gray-700 mb-6 text-center">Sign up</h1>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              autoComplete="username"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="new-password"
              name="password"
              autoComplete="new-password"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mt-6 rounded bg-purple-800 px-6 py-3 text-white hover:bg-purple-900 transition duration-300 shadow-lg w-full"
            >
              Sign up
            </button>
          </div>
          {message && <p className="text-purple-800 text-center mt-4">{message}</p>}
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        </form>
      </div>
    </div>
  )
}