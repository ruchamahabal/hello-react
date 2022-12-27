import logo from "../assets/logo.png";

import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar relative mb-3 flex flex-wrap items-center justify-between bg-black px-5 py-3">
			<div className="logo flex items-center">
				<img className="h-10 w-10" src={logo} alt="logo"></img>
				<h1 className="title link ml-1 text-3xl text-white">
					Web Pirates
				</h1>
			</div>

			<div className="nav-links flex flex-row gap-5 px-3">
				<Link to="/" className="link text-white">
					Home
				</Link>

				<Link to="/about-us" className="link text-white">
					About Us
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
