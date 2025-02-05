"use client";

import { FaGithub } from "react-icons/fa";
// import Button from "@/components/ui/Button";
import GradientButton from "./ui/gradientbutton";

export default function HeroSectionWithNavbar() {
  return (
    <div className="relative min-h-screen w-full flex flex-col bg-black text-white mx-auto">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-black via-[#0a0a0a] to-[#050505] text-white z-10 mx-36 ml-2"> {/* Add margin here */}
        <div className="ml-32 text-xl font-bold">Miragecould</div>
        <ul className="flex space-x-6 ml-24">
          <li>
            <a href="#" className="hover:text-blue-500">
              Features
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex space-x-4 ml-auto">
          <button className="font-bold text-sm bg-transparent text-white px-8 py-2 rounded-full transition-all">
            <a
              href="https://github.com/SAHIL13928"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <FaGithub />
              <span>STAR US</span>
            </a>
          </button>
          <button className="font-bold text-sm bg-transparent border border-white text-white px-4  rounded-full transition-all hover:shadow-sm hover:shadow-white">
            SIGN IN
          </button>
          <button className="font-bold text-sm bg-transparent border border-white text-white px-4 rounded-full transition-all hover:shadow-sm hover:shadow-white">
            GET STARTED
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative flex-1 w-full flex flex-col items-start justify-center px-36 py-28 bg-black">
        <h1 className="text-7xl font-bold leading-tight">
          Everything App <br />
          <span className="text-blue-100 ">for your teams</span>
        </h1>
        <p className="text-white mt-4 text-lg max-w-xl">
          Huly, an open-source platform, serves as an all-in-one <br /> replacement of
          Linear, Jira, Slack, and Notion.
        </p>
        <div className="mt-11 lg:mt-9 md:mt-7 sm:mt-5">
          <GradientButton>
            <span className="text-[#5A250A]">Try it Free</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 9"
              className="h-[9px] w-[17px] text-[#5A250A]"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="m12.495 0 4.495 4.495-4.495 4.495-.99-.99 2.805-2.805H0v-1.4h14.31L11.505.99z"
                clipRule="evenodd"
              />
            </svg>
          </GradientButton>
        </div>

       
        <div className="mt-14 w-full py-36 flex justify-start">
          <div className="relative rounded-md overflow-hidden w-full sm:w-[80%]">
            <img
              alt="Huly App"
              fetchPriority="high"
              width="1024"
              height="569"
              decoding="async"
              src="/huly2.jpg"
              className="w-full rounded-md"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="absolute bottom-[200px] left-[152px] z-30 overflow-hidden text-sm tracking-snugger ">
          <p className="mb-3.5 font-light leading-none text-white/60 will-change-transform">
            Everything you need for productive team work:
          </p>
          <div className="w-full xs:flex xs:overflow-hidden">
            <ul className="flex flex-shrink-0 font-semibold leading-dense text-white will-change-transform xs:animate-infinityScroll">
              <li className="relative sm:shrink-0 xs:before:relative xs:before:mx-2 xs:before:inline-block xs:before:aspect-square xs:before:w-[3px] xs:before:rounded-full xs:before:bg-white/30 xs:before:align-middle ">
                Team Planner
              </li>
              <li className="relative sm:shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2">
                Project Management
              </li>
              <li className="relative sm:shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2">
                Virtual Office
              </li>
              <li className="relative sm:shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2">
                Chat
              </li>
              <li className="relative sm:shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2">
                Documents
              </li>
              <li className="relative sm:shrink-0 before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:before:mx-2">
                Inbox
              </li>
            </ul>
            <ul className="hidden flex-shrink-0 font-semibold leading-dense text-white will-change-transform xs:flex xs:animate-infinityScroll">
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
                Team Planner
              </li>
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
                Project Management
              </li>
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
                Virtual Office
              </li>
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
                Chat
              </li>
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
                Documents
              </li>
              <li className="relative before:relative before:mx-2.5 before:inline-block before:aspect-square before:w-[3px] before:rounded-full before:bg-white/30 before:align-middle sm:shrink-0 sm:before:mx-2">
                Inbox
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
