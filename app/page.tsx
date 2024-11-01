"use client"

import { Nav } from "../components/ui/nav"
import animations from "@/components/ui/css/animations.module.css"
import Link from 'next/link'
import Background from "../components/ui/backgrounds/background1"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import getProfile from "./lib/get_profile"

export default function Page() {
  const [href, setHref] = useState('#')
  const [title, setTitle] = useState("Welcome to Dockify");

  useEffect(() => {
    let token = localStorage.getItem("token")!;
    if (!token) {
      setHref("/signup");
    }

    getProfile({token}).then((profile) => {
      setTitle("Welcome back, " + profile.username);
    }).catch(() => {
      localStorage.removeItem("token");
    })
  }, [])

  return (
    <div className='poppins-regular flex flex-col w-full'>
      <Background />
      <Nav className={animations.fadein} />

      <section className={`flex min-h-screen items-center justify-center flex-col ${animations.fadein}`}>
        <h1 className="text-6xl font-bold text-white mb-6">{title}</h1>
        <p className="text-gray-400 mb-6 text-xl">Free docker containers for all your hosting dependencies.</p>
        <div className="flex items-center justify-center flex-row">
          <Link href={href}>
            <Button variant="default" size="lg" className="mr-5">
              Get Started
            </Button>
          </Link>
        </div>
      </section>

      <section className="min-h-screen py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-purple-400">Deploy faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Everything you need for remote management and deployment of your containers
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Dockify provides a seamless experience for managing and deploying your Docker containers, making your development process smoother and more efficient.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {[
                { title: "Easy Setup", description: "Get started with Dockify in minutes. Our intuitive interface makes container management a breeze." },
                { title: "Scalable Infrastructure", description: "Easily scale your applications up or down based on your needs, without any hassle." },
                { title: "Testing Made Easy", description: "Use our free subdomain given to each user for easy testing of your app or website built in." },
                { title: "Painless Uploads", description: "Upload your image to our website and easily run it like you've never done before." }
              ].map((feature, index) => (
                <Card key={index} className="bg-white/5 border-purple-800/50">
                  <CardHeader>
                    <CardTitle className="text-purple-400">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Create Account", description: "Sign up for Dockify and set up your profile." },
              { step: "2", title: "Configure Containers", description: "Choose and configure your Docker containers." },
              { step: "3", title: "Deploy & Manage", description: "Deploy your containers and manage them with ease." }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg">
                <div className="text-purple-400 text-4xl font-bold mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">Join each of the developers who trust Dockify for their container needs.</p>
          <Link href={href}>
            <Button variant="default" size="lg">
              Sign Up Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}