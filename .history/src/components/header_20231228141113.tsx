"use client"
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";


const Header = () => {

  return (
    <>
      <nav className="hidden fixed z-50 w-full h-20 md:flex justify-between items-center p-5 bg-black">
        {/* Left Side: Logo and GuidanceGrove™ */}
        <div className="flex items-center space-x-3">
          <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />
          <div className="text-xl font-caveat font-bold text-white">
            GuidanceGrove™
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div>
          <ul className="flex space-x-4">
            <li><a href="/" className="text-neutral-400 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-neutral-400 hover:text-white">About</a></li>
            <li><a href="/services" className="text-neutral-400 hover:text-white">Services</a></li>
            <li><a href="/contact" className="text-neutral-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right Side: Placeholders for Language, Search, and Dark Mode Toggle */}
        <div className="flex items-center space-x-3">
          <div className="text-white">Language</div>
          <div className="text-white">Search</div>
          <ThemeToggle />
        </div>
      </nav>

      {/*Mobile Navbar*/}

      <MobileNavigation />


    </>
  );
};

export default Header;