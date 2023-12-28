"use client"
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import { Navbar } from "flowbite-react";


const Header = () => {

  return (
    <>
      <nav className="hidden fixed z-50 w-full h-20 lg  lg:flex justify-between items-center p-5 bg-black">
        {/* Left Side: Logo and GuidanceGrove™ */}
        <div className="flex items-center space-x-3">
          <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />
          <div className="text-xl font-caveat font-bold text-white">
            GuidanceGrove™
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div>
          <ul className="hidden lg:flex space-x-4">
            <li><a href="/" className="text-neutral-400 hover:text-white">Home</a></li>
            <li><a href="/about" className="text-neutral-400 hover:text-white">About</a></li>
            <li><a href="/services" className="text-neutral-400 hover:text-white">Services</a></li>
            <li><a href="/contact" className="text-neutral-400 hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Right Side: Placeholders for Language, Search, and Dark Mode Toggle */}
        <div className="flex items-center space-x-3">
          <div className="text-white">Language</div>
          <SearchBar />
          <ThemeToggle />

        </div>
      </nav>

      {/*Medium View Navbar*/}
      <Navbar className='lg:hidden md:flex sm:hidden  w-full h-20 justify-between items-center p-5 bg-black fixed z-50'       >

        <div className="flex items-center space-x-3">
          <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />

        </div>

        <div className='flex'>
          <div className='hidden'>
            <SearchBar />
          </div>
          <ThemeToggle />
          <Navbar.Toggle className="bg-black md:inline-flex lg:hidden" />

          <Navbar.Collapse className='bg-white absolute top-[5rem]'>
            <SearchBar />
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Service</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
            <Navbar.Link href="#">Language</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {/*Mobile Navbar*/}
      <MobileNavigation />


    </>
  );
};

export default Header;