"use client"
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const ServicesSection = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div id="services" className={`h-screen flex items-center justify-center  `}>
      <div className="text-center">
        <h2 className="text-3xl font-bold">What We Do</h2>
        {/* Add service details here */}
      </div>
    </div>
  );
};

export default ServicesSection;

