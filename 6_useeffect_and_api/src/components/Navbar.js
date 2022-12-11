import logo from "../assets/logo.jpeg";

import SearchBar from "./SearchBar";

const Navbar = ({ APIData, setFilteredMembers }) => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} alt="logo"></img>
				<h1 className="title">Web Pirates</h1>
			</div>
			<SearchBar APIData={APIData} setFilteredMembers={setFilteredMembers} />
		</div>
	)
};

export default Navbar;