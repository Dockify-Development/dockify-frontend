"use client"

import { useState } from "react";
import Background from "../../components/ui/backgrounds/background2";
import { Nav } from "../../components/ui/nav";
import { contact } from "../lib/contact";

export default function Page() {
  const [formData, setFormData] = useState({
    subject: "",
    body: "",
    email: "",
    error: ""
  });
    
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.subject || !formData.body || !formData.email) {
      setFormData((prevData) => ({
        ...prevData,
        ["error"]: "Please specify subject/message and your email."
      }))
    }
    try {
      let data = await contact(formData);
      let token = data.token;
      if (token) {
        console.log("Message sent");
        localStorage.setItem("token", token);
        //window.location.href = "/dashboard"; idk if we need redirect
      }
    } catch (error) {
      console.error("Message failed to send", error);
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
        <h1 className="text-4xl font-bold text-gray-700 mb-6 text-center">Contact</h1>
          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter the subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="body" className="block text-sm font-medium text-gray-700">
              Body
            </label>
            <textarea
              id="body"
              className="mt-1 block w-full p-2 resize-none border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your message"
              rows={5}
              value={formData.body}
              onChange={(event) =>
                setFormData((prevData) => ({
                  ...prevData,
                  ["body"]: event.target.value
                }))
              }
            />
          </div>
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
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="mt-6 rounded bg-purple-800 px-6 py-3 text-white hover:bg-purple-900 transition duration-300 shadow-lg w-full">
              Send
            </button>
          </div>
          <div className="flex flex-grow items-center justify-between">
            <h3 id="error" className="text-red-500 text-center">{formData.error}</h3>
          </div>
        </form>
        
      </div>
    </div>
  );
}
