import logo from "../assets/images/logo.jpeg";

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} alt="logo"></img>
				<h1 className="title link">Web Pirates</h1>
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
	);
};

export default Navbar;
