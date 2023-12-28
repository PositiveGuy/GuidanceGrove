import { useState } from 'react';
import { Dropdown } from "flowbite-react";

export default function MobileNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div>
            <div>
                {/* Toggle button */}
                <button
                    onClick={toggleMenu} // Attach the toggle function
                    data-collapse-toggle="navbar-hamburger"
                    type="button"
                    className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-hamburger"
                    aria-expanded={isMenuOpen} // Reflect the state of the menu
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>

                {/* Menu */}
                <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full`} id="navbar-hamburger">
                    {/* Menu items... */}
                </div>
            </div>
        </div>
    );
}
