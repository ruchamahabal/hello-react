import { useContext } from "react";
import { Link } from "react-router-dom";

import ThemeContext from "../contexts/ThemeContext";

import logo from "../assets/images/logo.png";
import sun from "../assets/images/sun.png";
import moon from "../assets/images/moon.png";

const Navbar = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const updateTheme = () => {
		const newTheme = theme === "light" ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<div
			className="navbar"
			data-theme={`${theme === "light" ? "light" : "dark"}`}
		>
			<div className="nav-left">
				<div className="logo">
					<img src={logo} alt="logo"></img>
					<h1 className="title link">WebPirates</h1>
				</div>
				<div className="nav-links">
					<Link to="/" className="link">
						Home
					</Link>

					<Link to="/about-us" className="link">
						About Us
					</Link>
				</div>
			</div>

			<a
				className="theme-toggle"
				id="theme-toggle"
				aria-label="auto"
				aria-live="polite"
				onClick={updateTheme}
			>
				{theme === "light" ? (
					<img src={moon} className="theme-toggler"></img>
				) : (
					<img src={sun} className="theme-toggler"></img>
				)}
			</a>
		</div>
	);
};

export default Navbar;
