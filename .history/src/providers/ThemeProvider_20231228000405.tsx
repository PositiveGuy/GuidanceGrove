"use client"

import { ThemeContext } from "@/context/ThemeContext"
import { useState, useEffect, useContext, ReactNode } from "react"

interface ChildrenProps {
    children: ReactNode
}

export default function ThemeProvider({ children }: ChildrenProps) {
    const { theme } = useContext(ThemeContext)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    // Only render children once the component has mounted on the client side
    if (!mounted) {
        return null; // or a loading placeholder if desired
    }

    return <div className={theme}>{children}</div>
}
