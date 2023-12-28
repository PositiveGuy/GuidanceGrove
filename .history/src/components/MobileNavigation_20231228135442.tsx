import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function MobileNavigation() {


    return (
        <Navbar collapseOnSelect={true} fluid={true} rounded={true}>

            <div className="flex items-center space-x-3">
                <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />

            </div>
            {/* Right Side: Placeholders for Language, Search, and Dark Mode Toggle */}
            <div className="flex items-center space-x-3">
                <div className="text-white">Language</div>
                <div className="text-white">Search</div>
                <ThemeToggle />
            </div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#" active>Home</Navbar.Link>
                <Navbar.Link href="#">About</Navbar.Link>
                <Navbar.Link href="#">Service</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
