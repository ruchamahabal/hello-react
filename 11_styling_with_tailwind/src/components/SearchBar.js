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
		<div className="search-container mt-10 mb-3 flex justify-center">
			<input
				type="search"
				placeholder="Search..."
				className="search-bar h-10 w-80 rounded border-y border-x border-solid border-slate-300 px-3 py-5 text-sm leading-6 text-slate-500 outline-0"
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
