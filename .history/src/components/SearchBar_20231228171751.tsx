export default function SearchBar() {
    return (
        <form className="flex items-center">
            <div className="relative w-full h-44">
                {/* Search Icon */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                    </svg>
                </div>

                {/* Input Field */}
                <input
                    type="search"
                    id="default-search"
                    className="block w-full pl-10 pr-20 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search Mockups, Logos..."
                    required
                />

                {/* Search Button */}
                <button type="submit" className="text-white absolute right-0 top-0 bottom-0 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-r-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
        </form>
    );
}
