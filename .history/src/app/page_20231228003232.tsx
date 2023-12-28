import React from 'react';
//components import

import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import BelieveSection from '@/components/BelieveSection';
import ServicesSection from '@/components/ServicesSection';
import CallToActionSection from '@/components/CallToActionSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';

//page layout
const Page = () => {
  return (
    <>
      <BelieveSection />
      <ServicesSection />
      <TestimonialsSection />
      <CallToActionSection />
      <ContactSection />
    </>
  );
};

export default Page;
