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
	const dispatch = useDispatch();

	const handleLogout = () => {
		e.preventDefault();
		dispatch(LogoutUser());
	};

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

			<div className="nav-right">
				{username ? (
					<>
						<p className="link">Hello, {username}</p>
						<Link
							to="/login"
							className="link"
							onClick={handleLogout}
						>
							Logout
						</Link>
					</>
				) : (
					<Link to="/login" className="link">
						Login
					</Link>
				)}
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
		</div>
	);
};

export default Navbar;
