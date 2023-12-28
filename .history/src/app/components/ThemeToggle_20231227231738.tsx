"use client"
import { useState } from 'react'
import { Switch } from '@headlessui/react'

export default function ThemeToggle() {
    const [enabled, setEnabled] = useState(false)

    return (
        <Switch
            checked={enabled}
            onChange={setEnabled}
            className="relative inline-flex h-6 w-11 items-center rounded-full ui-checked:bg-blue-600 ui-not-checked:bg-gray-200"
        >
            <span className="sr-only">Enable notifications</span>
            <span className="inline-block h-4 w-4 transform rounded-full bg-white transition ui-checked:translate-x-6 ui-not-checked:translate-x-1" />
        </Switch>
    )
}
