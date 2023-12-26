import React from 'react';
//components import
import BelieveSection from './components/BelieveSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import CallToActionSection from './components/CallToActionSection';
import ContactSection from './components/ContactSection';

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
