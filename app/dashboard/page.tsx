"use client"

import Sidebar from "@/components/ui/sidebar"
import animations from "@/components/ui/css/animations.module.css"
import Background from "@/components/ui/backgrounds/background3"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Nav } from "@/components/ui/nav"
import { Trash2, Edit, Play, X as Stop } from 'lucide-react'
import getProfile from "../lib/get_profile"
import router from "next/router"

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeSection, setActiveSection] = useState('Instances')
  const [profile, setProfile] = useState({
    "username": "",
    "email": "",
    "creation_date": ""
  })
  const [containerInfo, setContainerInfo] = useState({
    "image": "",
    "memory": 0,
    "memory_swap": 0,
    "cpu_cores": 0,
    "name": ""
  })
  const [fileName, setFileName] = useState('No file selected');
  useEffect(() => {
    let token = localStorage.getItem("token")!;
    let profile;
    !token ? router.push("/login") : profile = getProfile({ token });
    profile?.then((response) => {
      setProfile(response);
      console.log(response);
    })
  }, [])
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    files && files.length > 0 ? setFileName(files[0].name) : setFileName('No file selected');
  };
  const handleContainerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setContainerInfo(prevData => ({
      ...prevData,
      [name]: value
    }))
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

  }
  const renderDashboardContent = () => {
    switch (activeSection) {
      case 'Instances':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Your Instances</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-lg shadow-lg overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-purple-900/50">
                  <tr>
                    <th className="p-4 text-white">Name</th>
                    <th className="p-4 text-white">Status</th>
                    <th className="p-4 text-white">Actions</th>
                  </tr>
                </thead>
                <tbody>

                  {['test1', 'test2', 'test3'].map((instance, index) => (
                    <tr key={instance} className="border-b border-purple-800/30">
                      <td className="p-4 text-gray-300">{instance}</td>
                      <td className="p-4 text-gray-300">{index % 2 === 0 ? 'Running' : 'Stopped'}</td>
                      <td className="p-4 text-gray-300">
                        <Button variant="ghost" size="sm" className="mr-2">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="mr-2">
                          {index % 2 === 0 ? <Stop className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )
      case 'Profile':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Your Profile</h2>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">User: {profile.username}</p>
              <p className="text-gray-300 mb-4">Email: {profile.email}</p>
              <p className="text-gray-300">Member since: {new Date(Number(profile.creation_date)).toDateString()}</p>
            </div>
          </div>
        )
      case 'Create New':
        return (
          <>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Create New Instance</h2>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="instanceName" className="block text-sm font-medium text-gray-300">Container Name</label>
                    <input type="text" id="instanceName" onChange={handleContainerChange} name="instanceName" className="mt-1 block w-full rounded-md bg-purple-900/50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="instanceType" className="block text-sm font-medium text-gray-300">Your Image</label>
                    {/*<select id="instanceType" name="instanceType" className="mt-1 block w-full rounded-md bg-purple-900/50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>Image1 (not working yet)</option>
                      <option>Image2 (not working yet)</option>
                      <option>Image3 (not working yet)</option>
                    </select>*/}
                    <input type="text" name="instanceType" id="instanceType" onChange={handleContainerChange} className="mt-1 block w-full rounded-md bg-purple-900/50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="memory" className="block text-sm font-medium text-gray-300">Memory</label>
                    <input type="number" id="memory" onChange={handleContainerChange} name="memory" className="mt-1 block w-full rounded-md bg-purple-900/50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="memorySwap" className="block text-sm font-medium text-gray-300">Memory Swap</label>
                    <input type="number" id="memorySwap" onChange={handleContainerChange} name="memorySwap" className="mt-1 block w-full rounded-md bg-purple-900/50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <div>
                    <label htmlFor="instanceName" className="block text-sm font-medium text-gray-300">CPU Cores</label>
                    <input type="text" id="instanceName" onChange={handleContainerChange} name="instanceName" className="mt-1 block w-full rounded-md bg-purple-900/50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                  </div>
                  <Button type="submit">Create Container</Button>
                </form>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Create New Image</h2>
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
                <form className="space-y-4">
                  <div>
                    <label htmlFor="imageName" className="block text-sm font-medium text-gray-300">Image Name</label>
                    <input
                      type="text"
                      id="imageName"
                      name="imageName"
                      className="mt-1 block w-full rounded-md bg-purple-900/50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="instanceType" className="block text-sm font-medium text-gray-300">Your Image</label>
                    <div className="relative">
                      <input
                        type="file"
                        id="fileInput"
                        accept=".tar"
                        className="hidden"
                        onChange={handleFileChange}
                      />
                      <label
                        htmlFor="fileInput"
                        className="cursor-pointer mt-1 block w-full text-center rounded-md bg-purple-900/50 border border-gray-300 p-2 shadow-sm text-gray-300 hover:bg-purple-800/50 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      >
                        Choose File
                      </label>
                      <p className="mt-2 text-sm text-gray-300">{fileName}</p>
                    </div>
                  </div>
                  <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700">
                    Submit for Review
                  </button>
                </form>
              </div>
            </div>
          </>
        )
      case 'Shop':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Shop</h2>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <p className="text-gray-300 mb-4">idk what to put here!</p>
            </div>
          </div>
        )
      case 'Settings':
        return (
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg">
              <form className="space-y-4">
                <div>
                  <label htmlFor="notifications" className="block text-sm font-medium text-gray-300">Email Notifications (todo)</label>
                  <input type="checkbox" id="notifications" name="notifications" className="mt-1 rounded bg-purple-900/50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                </div>
                <div>
                  <label htmlFor="theme" className="block text-sm font-medium text-gray-300">Theme (todo)</label>
                  <select id="theme" name="theme" className="mt-1 block w-full rounded-md bg-purple-900/50 border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    <option>Dark</option>
                    <option>Light</option>
                  </select>
                </div>
                <Button type="submit">Save Settings</Button>
              </form>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className='min-h-screen poppins-regular flex flex-col w-full'>
      <Background />
      <Nav />
      <Sidebar className={animations.fadein} isSidebarOpen={isSidebarOpen} setActiveSection={setActiveSection} />

      <main className={`flex-grow pt-16 px-2 md:px-6 lg:px-8 transition-all duration-300 ml-72`}>
        <div className={`mt-8 ${animations.fadein}`}>
          {renderDashboardContent()}
        </div>
      </main>
    </div>
  )
}