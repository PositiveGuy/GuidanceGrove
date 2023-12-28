"use client"
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === "light" ? " bg-sage" : "bg-gray-700"}`}>
            {children}
        </div>
    );
};

export default ThemeWrapper;
