import { useState, createContext, useContext } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

export function ThemeProvider({ children }) {
	const [darkMode, toggleTheme] = useState(false);
	function changeTheme() {
		if (darkMode) {
			document.documentElement.style.setProperty("--background", "#fff");
			document.documentElement.style.setProperty("--bodyBackground", "#ddd");
			document.documentElement.style.setProperty("--sideNavShadow", "#929292");
			document.documentElement.style.setProperty("--text", "#666");
		} else {
			document.documentElement.style.setProperty("--background", "#666");
			document.documentElement.style.setProperty("--bodyBackground", "#333");
			document.documentElement.style.setProperty("--sideNavShadow", "#2e2e2e");
			document.documentElement.style.setProperty("--text", "#eee");
		}
		toggleTheme(!darkMode);
	}

	return <ThemeContext.Provider value={{ darkMode, changeTheme }}>{children}</ThemeContext.Provider>;
}
