import { useContext } from "react";
import { useRouteError } from "react-router-dom";

import ThemeContext from "../contexts/ThemeContext";

const Error = () => {
	const errorData = useRouteError();
	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div className="centered-div" data-theme={theme}>
			<h2>Oops! Something went wrong!</h2>
			<p>{errorData.statusText || errorData.message}</p>
		</div>
	);
};

export default Error;
