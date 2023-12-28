import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

export default function MobileNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar className='flex w-full h-20 justify-between items-center px-5 bg-black fixed z-50' fluid={true}>
            <div className="flex items-center space-x-3">
                <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />
            </div>

            {/* Show the search bar from the md breakpoint */}
            <div className='hidden md:block flex-grow'>
                <SearchBar />
            </div>

            <div className='flex items-center'>
                {/* Hide the theme toggle button until the md breakpoint */}
                <div className='hidden md:block'>
                    <ThemeToggle />
                </div>

                {/* Navbar.Toggle will be visible until the lg breakpoint */}
                <Navbar.Toggle onClick={() => setIsMenuOpen(!isMenuOpen)} className="bg-black md:block lg:hidden" />

                {/* Navbar.Collapse will show/hide based on isMenuOpen state */}
                <Navbar.Collapse >
                    <ul className='flex flex-col mt-4 md:flex-row md:space-x-4'>
                        <li className='md:hidden'><SearchBar /></li> {/* Search bar hidden on md because it's already shown above */}
                        <li><Navbar.Link href="#">Home</Navbar.Link></li>
                        <li><Navbar.Link href="#">About</Navbar.Link></li>
                        <li><Navbar.Link href="#">Service</Navbar.Link></li>
                        <li><Navbar.Link href="#">Contact</Navbar.Link></li>
                        <li><Navbar.Link href="#">Language</Navbar.Link></li>
                    </ul>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}
