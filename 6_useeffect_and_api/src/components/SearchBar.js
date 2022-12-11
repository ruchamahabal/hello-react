import { useState } from "react";

/**
 * returns filtered members that match name/designation with searchText
 * @param {string} searchText text used to match for filtering
 * @param {object} data data to filter from
 */
const getFilteredMembers = (searchText, memberData) => {
	return memberData.filter((res) =>
		(
			res.name.toLowerCase().includes(searchText.toLowerCase())
			|| res.designation.toLowerCase().includes(searchText.toLowerCase())
		)
	);
};

const SearchBar = ({ setFilteredMembers }) => {
	// state variable and function for getting and setting the searchText
	const [searchText, setSearchText] = useState("");

	/**
	 * Event handler for the search form 
	 * @param {object} e event to be handled
	 */
	const inputHandler = (e) => {
		e.preventDefault();
		// get filtered member list
		const filteredMembers = getFilteredMembers(searchText, []);
		// call passed function prop to set the filteredMembers in the CardContainer
		setFilteredMembers(filteredMembers);
	}

	return (
		<div className="search-container">
			<form onInput={inputHandler}>
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