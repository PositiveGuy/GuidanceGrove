import { Menu } from '@headlessui/react'

export default function MobileNavigation() {
    return (
        <Menu>
            <Menu.Button>More</Menu.Button>
            <ul className="flex space-x-4"></ul>
            <Menu.Items>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                            <li><a href="/" className="text-neutral-400 hover:text-white">Home</a></li>
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item>
                    {({ active }) => (
                        <a
                            className={`${active && 'bg-blue-500'}`}
                            href="/account-settings"
                        >
                            Documentation
                        </a>
                    )}
                </Menu.Item>
                <Menu.Item disabled>
                    <span className="opacity-75">Invite a friend (coming soon!)</span>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}