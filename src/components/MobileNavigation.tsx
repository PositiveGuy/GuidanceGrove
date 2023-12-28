import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

export default function MobileNavigation() {


    return (
        <Navbar className='flex sm:flex md:flex lg:hidden w-full h-20 justify-between items-center p-5 bg-black fixed z-50'       >

            <div className="flex items-center space-x-3">
                <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />

            </div>

            <div className='flex'>
                <div className='hidden'>
                    <SearchBar />
                </div>
                <ThemeToggle />
                <Navbar.Toggle className="bg-black    sm:flex md:flex lg:hidden" />

                <Navbar.Collapse className='bg-white absolute top-[5rem] '>
                    <SearchBar />
                    <Navbar.Link href="#">Home</Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Service</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                    <Navbar.Link href="#">Language</Navbar.Link>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
