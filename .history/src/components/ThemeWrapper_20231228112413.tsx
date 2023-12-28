"use client"
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`${theme === "light" ? "light-theme" : "dark-theme"}`}>
            {children}
        </div>
    );
};

export default ThemeWrapper;
