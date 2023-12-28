import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

export default function MobileNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar className='lg:hidden fixed top-0 z-50 w-full bg-black' fluid={true} rounded={false}>
            {/* Brand Logo */}


            {/* Toggler */}
            <Navbar.Toggle
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            />

            {/* Collapsible content */}
            <Navbar.Collapse  >
                <SearchBar />
                <Navbar.Link href="#" active={true}>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#">
                    About
                </Navbar.Link>
                {/* Other navigation links */}
                {/* ... */}
            </Navbar.Collapse>

            {/* Right side items */}
            <div className="flex md:order-2">
                <ThemeToggle />
                <Navbar.Toggle />
            </div>
        </Navbar>
    );
}
