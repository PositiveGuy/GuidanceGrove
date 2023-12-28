import { Navbar } from 'flowbite-react';
import Link from 'next/link';
import { useState } from 'react';

export default function MobileNavigation() {


    return (
        <Navbar className='bg-black' fluid={true} rounded={true}>

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
