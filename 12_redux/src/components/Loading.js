import { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

const Loading = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div
			className="centered-div"
			data-theme={theme === "light" ? "light" : "dark"}
		>
			<h2>Loading...</h2>
		</div>
	);
};

export default Loading;
