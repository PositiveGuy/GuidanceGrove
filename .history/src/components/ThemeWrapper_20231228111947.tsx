export default function ThemeWrapper({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider>
            <ThemeContextProvider>
                {children}
            </ThemeContextProvider>
        </ThemeProvider>
    )
}