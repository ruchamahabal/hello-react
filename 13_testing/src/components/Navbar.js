import { useContext } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import ThemeContext from "../contexts/ThemeContext";
import { LogoutUser } from "../slices/userSlice";

import logo from "../assets/images/logo.png";
import sun from "../assets/images/sun.png";
import moon from "../assets/images/moon.png";

const Navbar = () => {
	const username = useSelector((store) => store.user.username);
	const { theme, setTheme } = useContext(ThemeContext);
	const is_theme_light = theme === "light";
	const dispatch = useDispatch();

	const handleLogout = () => {
		e.preventDefault();
		dispatch(LogoutUser());
	};

	const updateTheme = () => {
		const newTheme = is_theme_light ? "dark" : "light";
		setTheme(newTheme);
	};

	return (
		<div className="navbar" data-theme={theme}>
			<div className="nav-left">
				<div className="logo">
					<img
						src="https://img.icons8.com/glyph-neue/512/self-destruct-button.png"
						alt="logo"
						data-testid="logo"
					></img>
					<h1 className="title link">WebPirates</h1>
				</div>
			</div>

			<div className="nav-right">
				<div className="nav-links">
					<Link to="/" className="link">
						Home
					</Link>

					<Link to="/about-us" className="link">
						About Us
					</Link>
				</div>

				{username ? (
					<>
						<div className="user-info" data-theme={theme}>
							<p className="link login">Hello, {username}</p>
						</div>
						<Link
							to="/login"
							className="link"
							onClick={handleLogout}
						>
							Logout
						</Link>
					</>
				) : (
					<div className="user-info" data-theme={theme}>
						<Link className="link login" to="/login">
							Login
						</Link>
					</div>
				)}
				<a
					className="theme-toggle"
					id="theme-toggle"
					aria-label="auto"
					aria-live="polite"
					onClick={updateTheme}
				>
					{is_theme_light ? (
						<img src={moon} className="theme-toggler"></img>
					) : (
						<img src={sun} className="theme-toggler"></img>
					)}
				</a>
			</div>
		</div>
	);
};

export default Navbar;
