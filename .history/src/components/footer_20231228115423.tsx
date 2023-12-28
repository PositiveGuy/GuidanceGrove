"use client"
import { ThemeContext } from "@/context/ThemeContext";
import Image from "next/image";
import { useContext } from "react";

const Footer = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <footer className={`p-5 bg-black shadow-inner text-center  `}>
      <div className={`flex justify-center space-x-8 mt-10 `}>
        {/* Placeholder for social icons */}
        <Image src={"/SVGs/ig.svg"} width={50} height={50} alt="ig"></Image>
        <Image src={"/SVGs/fb.svg"} width={50} height={50} alt="fb"></Image>
        <Image src={"/SVGs/tw.svg"} width={50} height={50} alt="tw"></Image>
        <Image src={"/SVGs/wa.svg"} width={50} height={50} alt="wa"></Image>
        <Image src={"/SVGs/yt.svg"} width={50} height={50} alt="in"></Image>
      </div>

      <div className="flex justify-center space-x-1 mb-10 text-teal-50">
        <div className="mt-20">
          ©2023; designed with love and care by
        </div>
        <div className="mt-20 font-caveat">
          GuidanceGrove™
        </div>
      </div>
    </footer>
  );
};
//make GuidanceGrove in font Caveat
export default Footer;
