"use client"
import { useState } from "react";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import { Navbar } from "flowbite-react";


const Header = () => {

  return (
    <>
      <Navbar className=' '       >

        <div className="flex items-center space-x-3">
          <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />

        </div>

        <div className=' '>

          <ThemeToggle />
          <Navbar.Toggle className="" />

          <Navbar.Collapse className='bg-white  '>
            <SearchBar />
            <Navbar.Link href="#">Home</Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Service</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
            <Navbar.Link href="#">Language</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>



      {/* Mobile Navbar
      <MobileNavigation /> */}


    </>
  );
};

export default Header;