"use client"

import { ThemeContext } from "@/context/ThemeContext"
import { useState, useEffect, useContext, ReactNode } from "react"


interface ChildrenProps {
    children: ReactNode
}

// this component is created to keep the layout/page as server side rendered.
// useContext() requires you to have "use client"

export default function ThemeProvider({ children }: ChildrenProps) {
    const { theme } = useContext(ThemeContext)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        console.log("theme", theme)
    }, [])

    if (mounted) {
        return <div className={theme}>{children}</div>
    }
    return <div className={theme}>{children}</div>
}
