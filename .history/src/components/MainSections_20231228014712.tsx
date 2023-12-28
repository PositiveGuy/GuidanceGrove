"use client"
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

const ThemeWrapper = ({ children }: any) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={theme}>
            {children}
        </div>
    );
};

export default ThemeWrapper;
