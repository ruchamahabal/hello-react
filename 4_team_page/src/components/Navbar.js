import logo from "../assets/logo.jpeg";

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} alt="logo"></img>
				<h1 className="title">Web Pirates</h1>
			</div>
			<div className="search-container">
				<input type="text" placeholder="Search..." className="search-bar" autoFocus/>
			</div>
		</div>
	)
};

export default Navbar;