"use client"


import { ThemeContext } from "@/context/ThemeContext"
import Image from "next/image"
import { useContext } from "react"

export default function ThemeToggle() {
    const { toggle, theme } = useContext(ThemeContext)

    return (
        <>

            <div className="flex items-center w-14 h-6 rounded-full cursor-pointer justify-between  relative" onClick={toggle} style={theme === "dark" ? { backgroundColor: "white" } : { backgroundColor: "#0f172a" }}>
                <div>a</div>
                <div className="rounded-full w-5 h-5 absolute m-0.5" style={theme === "dark" ? { left: 1, background: "#0f172a" } : { right: 1, background: "white" }} />
                <div>b</div>
            </div>
        </>
    )
}
