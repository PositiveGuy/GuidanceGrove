import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Navbar fluid={true} rounded={true}>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#" active>Home</Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
