import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";

const SyncWithGithub = () => {
  return (
    <section className="relative z-20 overflow-hidden  px-36 bg-[#111111] pb-[180px] pt-[131px] px-safe lg:pb-[131px] lg:pt-24 md:py-24 sm:py-16">
      <div className="container-narrow px-32">
        <h2 className="max-w-2xl text-80 font-medium leading-[0.9] tracking-snugger text-white text-7xl tracking-tight">
          Sync with GitHub. Both&nbsp;ways.
        </h2>
        <p className="mt-4 max-w-[580px] leading-snug tracking-tight text-gray-400">
          {`Manage your tasks efficiently with Huly's bidirectional GitHub
          synchronization. Use&nbsp;Huly as an advanced front-end for GitHub
          Issues and GitHub Projects.`}
        </p>

        {/* Glowing Image Wrapper */}
        <div className="relative my-20 p-[10px] bg-black rounded-lg animate-moving-glow before:absolute before:inset-0 before:rounded-lg before:blur-md before:content-[''] before:z-[-1] before:bg-gradient-to-r before:from-orange-500 before:via-transparent before:to-blue-500 before:animate-glow">
          <div className="rounded-md overflow-hidden border-4 border-gray-800 shadow-lg">
            <Image src="/huly5.JPG" alt="" className="rounded-md overflow-hidden" width={960} height={554} />
          </div>
        </div>

        <FeatureList />
      </div>
    </section>
  );
};

export default SyncWithGithub;

const features = [
  {
    title: "Two-way synchronization",
    description: "Integrate your task tracker with GitHub to sync changes instantly.",
  },
  {
    title: "Private tasks",
    description: "Integration and management of multiple data repositories effectively.",
  },
  {
    title: "Multiple repositories",
    description: "Organize multiple projects for more effective planning and collaboration.",
  },
  {
    title: "Milestone migration",
    description: "Seamless migration of key project milestones between repositories.",
  },
  {
    title: "Track progress",
    description: "Keep track of GitHub contributions and changes within your workspace.",
  },
  {
    title: "Advanced filtering",
    description: "Precise project data search with advanced filtering capabilities.",
  },
];

const FeatureList = () => {
  return (
    <ul className="grid mt-40 grid-cols-3 gap-x-16 gap-y-20">
      {features.map((feature, index) => (
        <li key={index} className="relative">
          <div className="relative">
            <FaGithub className="h-10 w-10 text-white" />
          </div>
          <h3 className="mt-5 font-title text-3xl leading-none font-medium tracking-snugger text-white">
            {feature.title}
          </h3>
          <p className="mt-3 text-[15px] font-light leading-snug tracking-snugger text-gray-400 md:mt-2 md:leading-tight sm:mt-1">
            {feature.description}
          </p>
        </li>
      ))}
    </ul>
  );
};
