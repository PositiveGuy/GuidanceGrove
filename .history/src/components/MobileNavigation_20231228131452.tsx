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
            <Dropdown label="Dropdown button">
                <Dropdown.Item>
                    Home
                </Dropdown.Item>
                <Dropdown.Item>
                    About
                </Dropdown.Item>
                <Dropdown.Item>
                    Service
                </Dropdown.Item>
                <Dropdown.Item>
                    Contact
                </Dropdown.Item>
            </Dropdown>
        </div>
    );
}
