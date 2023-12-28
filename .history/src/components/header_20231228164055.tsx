"use client"
import { useContext, useEffect, useRef, useState } from "react";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import { Navbar } from "flowbite-react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";


const Header = () => {
  const { theme } = useContext(ThemeContext)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setMenuOpen(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [menuRef, buttonRef])
  return (
    <>

      <nav className="flex fixed z-50 w-full h-20 justify-between items-center p-5 bg-black">
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
          <div className="hidden md:flex">
            <SearchBar />
          </div>
          <ThemeToggle />

        </div>
        {/* Burger Menu */}
        <button ref={buttonRef} className="lg:hidden cursor-pointer  p-2 mr-1.5" onClick={handleMenuToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="grey" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>
      {/* Mobilie Navbar */}
      <div ref={menuRef} className={`lg:hidden ${menuOpen ? "flex" : "hidden"}   w-full z-50 top-[] fixed transition-all duration-500 ease-in-out`}>
        <div className={`flex flex-col absolute right-0 border   rounded-b-lg overflow-hidden  ${theme === "light" ? "bg-gray-50  text-gray-700" : "bg-gray-600 "} p-1`}>
          <div className="flex justify-center px-3 p-1">
            <SearchBar />
          </div>
          <Link href={"dashboard/createproperty"}>
            <div onClick={() => setMenuOpen(false)} className={`h-10 flex items-center px-3 ${theme === "light" ? "text-blue-500 hover:bg-slate-200 " : "text-blue-300 hover:bg-slate-500"}`}>

              <div>Add Property</div>
            </div>
          </Link>
          <Link href={"/"}>
            <div className={`h-10 flex items-center px-3 ${theme === "light" ? "text-red-500 hover:bg-slate-200" : "text-red-300 hover:bg-slate-500"}`}>

              <div>Logout</div>
            </div>
          </Link>
          <div className={`h-10 flex items-center px-3 ${theme === "light" ? "text-gray-500 " : "text-gray-300 "}`}>

            <div className="ml-1">Admin</div>
          </div>
        </div>
      </div>




    </>
  );
};

export default Header;