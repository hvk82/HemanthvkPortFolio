import { ArrowDownIcon } from "@heroicons/react/solid";
import React from "react";
// import { FiTwitter } from "@heroicons/react/outline";
import { CiTwitter } from "react-icons/ci";
import { BsGithub } from "react-icons/bs";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="https://twitter.com/HemanthVk11"
            className="ml-3 text-xl"
            target="_blank"
          >
            Hemanth Vishwakarma
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
        </nav>
        <a
          href="https://github.com/hvk82"
          target="_blank"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          <BsGithub className="w-5 h-5 ml-1" />
        </a>
        <a
          href="https://twitter.com/HemanthVk11"
          target="_blank"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          <CiTwitter className="w-6 h-6 ml-1" />
        </a>
        <a
          href="#contact"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact me
          <ArrowDownIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
