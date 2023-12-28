"use client"
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import { Navbar } from "flowbite-react";


const Header = () => {

  return (
    <>
      {/* Medium and Large View */}
      <nav className="hidden md:flex w-full h-20 justify-between items-center px-5 bg-black fixed z-50 lg:items-stretch">
        {/* Left Side: Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />
          <span className="text-xl font-caveat font-bold text-white">GuidanceGrove™</span>
        </div>

        {/* Center: Navigation Links for medium and large screens */}
        <ul className="hidden lg:flex space-x-4">
          <li><a href="/" className="text-neutral-400 hover:text-white">Home</a></li>
          <li><a href="/about" className="text-neutral-400 hover:text-white">About</a></li>
          <li><a href="/services" className="text-neutral-400 hover:text-white">Services</a></li>
          <li><a href="/contact" className="text-neutral-400 hover:text-white">Contact</a></li>
        </ul>

        {/* Right Side: Search and Toggle for medium and large screens */}
        <div className="flex items-center space-x-3">
          <div className="text-white">Language</div>
          <SearchBar />
          <ThemeToggle />
        </div>
      </nav>
      {/*Mobile Navbar*/}
      <MobileNavigation />


    </>
  );
};

export default Header;