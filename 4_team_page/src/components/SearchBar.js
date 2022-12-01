import { useState } from "react";

import { Team } from "../data/Team.js";

const getFilteredMembers = (searchText) => {
	/*
		return filtered members that match name/designation with searchText
	*/
	return Team.filter((res) => 
		(
			res.name.toLowerCase().includes(searchText.toLowerCase())
			|| res.designation.toLowerCase().includes(searchText.toLowerCase())
		)
	);
};

const SearchBar = ({ setFilteredMembers }) => {
	// state variable and function for getting and setting the searchText
	const [searchText, setSearchText] = useState("");

	return (
		<div className="search-container">
			<form
				onInput = {(e) => {
					e.preventDefault();
					// get filtered member list
					const filteredMembers = getFilteredMembers(searchText);
					// call passed function prop to set the filteredMembers in the CardContainer
					setFilteredMembers(filteredMembers);
				}}
			>
				<input 
					type="text" 
					placeholder="Search..."
					className="search-bar"
					value={searchText}
					onChange = {(e) => {
						setSearchText(e.target.value);
					}}
					autoFocus
				/>
			</form>
		</div>
	);
};

export default SearchBar;