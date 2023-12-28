"use client"
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const BelieveSection = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div id="believe" className={`h-screen flex items-center justify-center ${theme === "light" ? " bg-sage" : "bg-gray-700"} `}>
      <div className="text-center">
        <h2 className="text-3xl font-bold">What We Believe</h2>
        <p className="mt-4">At Guidance Grove, we are dedicated to illuminating the path of learning for every student.
          We believe that education is a journey best navigated with support, understanding, and personalized guidance.
          Our mission is to provide a nurturing environment where learners of all ages and backgrounds
          can discover their potential, overcome challenges, and achieve their academic goals.
          Through a combination of expert tutoring, mentorship, and a commitment to individual growth,
          we strive to empower students to take confident steps towards their future,
          fostering lifelong learners who are equipped to navigate the world with knowledge and curiosity.</p>
      </div>
    </div>
  );
};

export default BelieveSection;
