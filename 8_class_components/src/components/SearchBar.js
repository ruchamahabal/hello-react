import { useState } from "react";

/**
 * @param {string} searchText text used to match for filtering
 * @param {object} memberData data to filter from
 * @return {object} filtered member data that match name/designation with searchText
 */
const getFilteredMembers = (searchText, memberData) => {
	return (memberData || []).filter(
		(res) =>
			res.name?.toLowerCase().includes(searchText.toLowerCase()) ||
			res.login?.toLowerCase().includes(searchText.toLowerCase()) ||
			res.company?.toLowerCase().includes(searchText.toLowerCase())
	);
};

const SearchBar = ({ APIData, setFilteredMembers, setNoResults }) => {
	// state variable and function for getting and setting the searchText
	const [searchText, setSearchText] = useState("");

	/**
	 * Event handler for the search form
	 * @param {object} e event to be handled
	 */
	const inputHandler = (e) => {
		e.preventDefault();

		// get filtered member list by passing APIData as the main data to filter from
		const filteredMembers = getFilteredMembers(searchText, APIData);

		if (filteredMembers?.length) {
			setFilteredMembers(filteredMembers);
			setNoResults(false);
		} else {
			setNoResults(true);
		}
	};

	return (
		<div className="search-container">
			<input
				type="search"
				placeholder="Search..."
				className="search-bar"
				onChange={(e) => {
					setSearchText(e.target.value);
				}}
				onKeyUp={inputHandler}
				value={searchText}
				autoFocus
			/>
		</div>
	);
};

export default SearchBar;
