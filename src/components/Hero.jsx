"use client";  


import { FaGithub } from 'react-icons/fa'; 
import Button from "@/components/ui/button";

export default function HeroSectionWithNavbar() {
  return (
    <div className="relative h-screen w-full flex flex-col">
      {/* Navbar with same background as Hero */}
      <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-black via-[#0a0a0a] to-[#050505] text-white z-10">
  {/* Logo on the left */}
  <div className="ml-32 text-xl font-bold">Miragecould</div>

  {/* Navigation Links */}
  <ul className="flex space-x-6 ml-24">
    <li><a href="#" className="hover:text-blue-500">Features</a></li>
    <li><a href="#" className="hover:text-blue-500">Pricing</a></li>
    <li><a href="#" className="hover:text-blue-500">Contact</a></li>
  </ul>

  {/* Buttons on the right with same margin as the left side of the logo */}
  <div className="flex space-x-4 ml-auto">
    <button className="font-bold text-sm bg-transparent text-white px-8 py-2 rounded-full transition-all">
      <a href="https://github.com/SAHIL13928" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
        <FaGithub />
        <span>STAR US</span>
      </a>
    </button>
    <button className="font-bold text-sm bg-transparent border border-white text-white px-8 py-2 rounded-full transition-all hover:shadow-md hover:shadow-white">
      SIGN IN
    </button>
    <button className="font-bold text-sm bg-transparent border border-white text-white px-8 py-2 rounded-full transition-all hover:shadow-md hover:shadow-white">
      GET STARTED
    </button>
  </div>
</nav>



      {/* Hero Section */}
      <div className="relative flex-1 w-full flex items-center justify-start bg-black">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-[#050505]" />

        {/* Hero Content - Left Aligned */}
        <div className="absolute left-20 top-[20%]  text-white pl-16">
          <h1 className="text-7xl font-bold">
            Everything App <br />
            <span className="text-blue-100">for your teams</span>
          </h1>
          <p className="text-white mt-4 text-lg">
            Huly, an open-source platform, serves as an all-in-one <br/> replacement of
            Linear, Jira, Slack, and Notion.
          </p>

          {/* Button */}
          <div className="mt-6">
            <Button className="min-w-[220px]">
              TRY IT FREE →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
