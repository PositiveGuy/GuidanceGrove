"use client"
import { useContext } from 'react'
import { Switch } from '@headlessui/react'
import { ThemeContext } from '@/context/ThemeContext'

export default function Example() {
    const { toggle, theme } = useContext(ThemeContext)

    // Determine if the switch should be on or off based on the current theme
    const isDarkMode = theme === 'dark'

    return (
        <div className="flex items-center justify-center p-6"> {/* Adjusted for centering */}
            <Switch
                checked={isDarkMode}
                onChange={toggle} // Use the toggle function from context
                className={`${isDarkMode ? 'bg-teal-900' : 'bg-teal-700'}
                    relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none`}
            >
                <span className="sr-only">Toggle theme</span>
                <span
                    aria-hidden="true"
                    style={theme === "dark" ? { left: 1, background: "#0f172a" } : { right: 1, background: "white" }}
                    className={`
                        inline-block w-4 h-4 transform bg-white rounded-full transition-transform`}
                />
            </Switch>
        </div>
    )
}
