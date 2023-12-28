import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import SearchBar from './SearchBar';

export default function MobileNavigation() {
    // State to manage the collapse open/close
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar fluid={true} rounded={true} className='flex w-full h-20 items-center px-5 bg-black fixed z-50 lg:hidden'>

            <div className="flex items-center space-x-3">
                <img src="/Logo/guidance-grove-logo.png" alt="Guidance Grove Logo" className="h-12 w-12 rounded-full" />
            </div>

            <div className="flex items-center space-x-3">
                <ThemeToggle />

                {/* Toggle button that controls the collapse */}
                <Navbar.Toggle onClick={() => setIsMenuOpen(!isMenuOpen)} />

                {/* Collapsable menu */}
                <Navbar.Collapse >
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
