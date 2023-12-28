import React from 'react';
//components import
import BelieveSection from './components/BelieveSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import ContactSection from './components/ContactSection';
import ThemeProvider from '@/providers/ThemeProvider';
import { ThemeContextProvider } from '@/context/ThemeContext';

//page layout
const Page = () => {
  return (
    <>
      <ThemeContextProvider>
        <ThemeProvider>
          <BelieveSection />
          <ServicesSection />
          <TestimonialsSection />
          <CallToActionSection />
          <ContactSection />
          <ThemeProvider />
        </ThemeProvider>
      </>
      );
};

      export default Page;
