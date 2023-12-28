import { useState } from 'react';
import { Dropdown, Navbar, NavbarToggle } from "flowbite-react";
import Link from 'next/link';

export default function MobileNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to track menu visibility

    // Function to toggle menu visibility
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <Navbar fluid rounded>

            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link as={Link} href="#">
                    About
                </Navbar.Link>
                <Navbar.Link href="#">Services</Navbar.Link>
                <Navbar.Link href="#">Pricing</Navbar.Link>
                <Navbar.Link href="#">Contact</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}
