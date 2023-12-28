"use client"
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const TestimonialsSection = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div id="testimonials" className={`h-screen flex items-center justify-center ${theme === "light" ? " bg-sage" : "bg-gray-700"}`}>
      <div className="text-center">
        <h2 className="text-3xl font-bold">What People Say</h2>
        {/* Add testimonials here */}
      </div>
    </div>
  );
};

export default TestimonialsSection;
