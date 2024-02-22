import * as React from "react";

const ThemeContext = React.createContext();

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
};

export const ThemeProvider = ({ children }) => {
    const preference = window.matchMedia(
        "(prefers-color-scheme: dark)"
    ).matches;
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = React.useState(
        storedTheme || (preference ? "dark" : "light")
    );

    const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

    React.useEffect(() => {
        localStorage.setItem("theme", theme);
        document.documentElement.classList.toggle("dark", theme === "dark");
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
