"use client"
import BelieveSection from '../components/BelieveSection';
import ServicesSection from '../components/ServicesSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import ContactSection from '../components/ContactSection';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

export default function MainSections() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`${theme === "light" ? " bg-sage" : "bg-gray-700"}`}>
            <BelieveSection />
            <ServicesSection />
            <TestimonialsSection />
            <CallToActionSection />
            <ContactSection />
        </div>
    )
}