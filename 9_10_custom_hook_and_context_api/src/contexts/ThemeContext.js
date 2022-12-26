import { createContext } from "react";

const ThemeContext = createContext({
	theme: "light",
	setTheme: () => {},
});

export default ThemeContext;
