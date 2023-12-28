"use client"
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ContactSection = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div id="contact" className={`h-screen flex items-center justify-center bg-sage`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold">Contact Us</h2>
        {/* Add contact form or information here */}
      </div>
    </div>
  );
};

export default ContactSection;
