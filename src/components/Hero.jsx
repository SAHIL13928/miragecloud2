"use client";

import { FaGithub } from "react-icons/fa";
// import Button from "@/components/ui/Button";
import GradientButton from "./ui/GradientButton";

export default function HeroSectionWithNavbar() {
  return (
    <div className="relative min-h-screen w-full px-36 flex flex-col bg-black text-white mx-auto">
     

      {/* Hero Section */}
      <div className="relative flex-1 w-full flex flex-col items-start justify-center px-36 py-60 bg-black">
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
