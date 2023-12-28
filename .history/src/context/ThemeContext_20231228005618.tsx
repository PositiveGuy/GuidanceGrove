"use client"
import { createContext, useState, ReactNode, useEffect } from "react"

interface ChildrenProps {
    children: ReactNode
}

interface ThemeContextType {
    theme: string
    toggle: () => void
}

// This component is responsible to registering and remembering what theme was chosen by the user
// we use local storage for that
export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    toggle: () => { },
})

function getFormLocalStorage() {
    if (typeof window === "undefined") {
        return "light" // Use a default theme on the server-side
    }
    return localStorage.getItem("theme") || "light"
}

export const ThemeContextProvider = ({ children }: ChildrenProps) => {
    const [theme, setTheme] = useState<string>(getFormLocalStorage)

    // since next.js uses server side rendering, we must specify if the transition to client is completed
    const toggle = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === "light" ? "dark" : "light";
            console.log("Toggling theme to:", newTheme); // Debug log
            return newTheme;
        });
    };


    useEffect(() => {
        localStorage.setItem("theme", theme)
    }, [theme])

    return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>
}