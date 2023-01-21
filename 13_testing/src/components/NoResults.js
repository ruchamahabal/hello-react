import { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

const NoResults = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className="centered-div" data-theme={theme}>
			<h2>No results found for this search!</h2>
		</div>
	);
};

export default NoResults;
