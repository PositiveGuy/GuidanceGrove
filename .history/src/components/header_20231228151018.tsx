"use client"
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <nav className="fixed z-50 w-full h-20 md:flex justify-between items-center p-5 bg-black">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-3">
          <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />
          <span className="text-xl font-caveat font-bold text-white hidden md:block">
            GuidanceGrove™
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:block">
          <ul className="flex space-x-4">
            <li><a href="/" className="text-neutral-400 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-neutral-400 hover:text-white">About</a></li>
            <li><a href="/services" className="text-neutral-400 hover:text-white">Services</a></li>
            <li><a href="/contact" className="text-neutral-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Language, Search, and Dark Mode Toggle */}
        <div className="flex items-center space-x-3">
          <span className="text-white hidden md:block">Language</span>
          <SearchBar />
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <MobileNavigation />
      </div>
    </>
  );
};

export default Header;
