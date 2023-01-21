import { render } from "@testing-library/react";
import { StaticRouter } from "react-router-dom/server";
import { Provider } from "react-redux";

import Navbar from "../components/Navbar.js";

import store from "../store/store.js";

test("Loading Header", () => {
	const navbar = render(
		<StaticRouter>
			<Provider store={store}>
				<Navbar />
			</Provider>
		</StaticRouter>
	);

	const logo = navbar.getByTestId("logo");
	const logoURL =
		"https://img.icons8.com/glyph-neue/512/self-destruct-button.png";

	expect(logo.src).toBe(logoURL);
});
