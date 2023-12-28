"use client"
import { useContext, useEffect, useRef, useState } from "react";
import MobileNavigation from "./MobileNavigation";
import ThemeToggle from "./ThemeToggle";
import SearchBar from "./SearchBar";
import { Navbar } from "flowbite-react";
import { ThemeContext } from "@/context/ThemeContext";


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

      <nav className="hidden md:flex fixed z-50 w-full h-20 justify-between items-center p-5 bg-black">
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
      <button ref={buttonRef} className=" cursor-pointer p-2 mr-1.5 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 bg-black sm:flex md:flex lg:hidden" onClick={handleMenuToggle}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>




    </>
  );
};

export default Header;