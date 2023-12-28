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

      <nav className="flex fixed z-50 w-full h-20 items-center px-5 bg-black justify-between">
        {/* Left Side: Logo and GuidanceGrove™ */}
        <div className="flex items-center space-x-3">
          <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />
          <div className="hidden sm:flex text-xl font-caveat font-bold text-white">
            GuidanceGrove™
          </div>
        </div>

        {/* Center: Placeholders for Language, Search (hidden on mobile), and Dark Mode Toggle */}
        <div className="flex items-center space-x-3">
          <div className="hidden md:flex text-white">Language menu</div>
          <div className="hidden md:flex">
            <SearchBar />
          </div>
          <ThemeToggle />
        </div>

        {/* Burger Menu */}
        <button ref={buttonRef} className="lg:hidden cursor-pointer hover:bg-slate-800 rounded p-2" onClick={handleMenuToggle}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="grey" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-16 6h16" />
          </svg>
        </button>
      </nav>

      {/* Mobilie Dropdown Menu */}
      <div ref={menuRef} className={`lg:hidden ${menuOpen ? "flex" : "hidden"}   w-full z-50 top-[5rem] fixed transition-all duration-500 ease-in-out`}>
        <div className={`flex flex-col absolute right-0   rounded-b-lg overflow-hidden  bg-black p-1`}>
          <div className="flex md:hidden justify-center px-3 p-1">
            <SearchBar />
          </div>
          <Link href={"/"}>
            <div onClick={() => setMenuOpen(false)} className={`h-10 flex items-center px-3 text-white hover:bg-slate-600`}>

              <div>Home</div>
            </div>
          </Link>
          <button >
            <div onClick={() => setMenuOpen(false)} className={`h-10 flex items-center px-3 text-white hover:bg-slate-600`}>

              <div>Language</div>
            </div>
          </button>
          <Link href={"/"}>
            <div onClick={() => setMenuOpen(false)} className={`h-10 flex items-center px-3 text-white hover:bg-slate-600`}>

              <div>Service</div>
            </div>
          </Link><Link href={"/"}>
            <div onClick={() => setMenuOpen(false)} className={`h-10 flex items-center px-3 text-white hover:bg-slate-600`}>

              <div>About</div>
            </div>
          </Link><Link href={"/"}>
            <div onClick={() => setMenuOpen(false)} className={`h-10 flex items-center px-3 text-white hover:bg-slate-600`}>

              <div>Contact</div>
            </div>
          </Link>

        </div>
      </div>




    </>
  );
};

export default Header;