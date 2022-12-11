import { useState } from "react";

/**
 * returns filtered members that match name/designation with searchText
 * @param {string} searchText text used to match for filtering
 * @param {object} data data to filter from
 */
const getFilteredMembers = (searchText, memberData) => {
	return (memberData || []).filter((res) =>
		(
			res.name?.toLowerCase().includes(searchText.toLowerCase())
			|| res.login?.toLowerCase().includes(searchText.toLowerCase())
			|| res.company?.toLowerCase().includes(searchText.toLowerCase())
		)
	);
};

const SearchBar = ({ APIData, setFilteredMembers }) => {
	// state variable and function for getting and setting the searchText
	const [searchText, setSearchText] = useState("");

	/**
	 * Event handler for the search form 
	 * @param {object} e event to be handled
	 */
	const inputHandler = (e) => {
		e.preventDefault();
		setSearchText(e.target.value);

		// get filtered member list by passing APIData as the main data to filter from
		const filteredMembers = getFilteredMembers(searchText, APIData);
		// call passed function prop to set the filteredMembers in the CardContainer
		setFilteredMembers(filteredMembers);
	}

	return (
		<div className="search-container">
			<input
				type="search"
				placeholder="Search..."
				className="search-bar"
				onInput={inputHandler}
				value={searchText}
				autoFocus
			/>
		</div>
	);
};

export default SearchBar;