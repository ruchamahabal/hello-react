import { useEffect, useState, useRef, useContext } from "react";

import stateCityMap from "../assets/data/state_city_map.json";

// hooks, contexts
import useCities from "../hooks/useCities";
import ThemeContext from "../contexts/ThemeContext";

/**
 * @param {string} searchText text used to match for filtering
 * @param {string} stateName
 * @param {string} cityName
 * @param {object} memberData data to filter from
 * @return {object} filtered member data that matches name/username/company
 *  	with searchText & state / city with applied filters
 */
const getFilteredMembers = (searchText, stateName, cityName, memberData) => {
	const searchResults = getFilteredMembersBySearch(searchText, memberData);

	if (stateName || cityName)
		return getFilteredMembersByLocation(stateName, cityName, searchResults);

	return searchResults;
};

/**
 * @param {string} stateName
 * @param {string} cityName
 * @param {object} memberData data to filter from
 * @return {object} filtered member data that matches state and city with filter values
 */
const getFilteredMembersByLocation = (stateName, cityName, memberData) => {
	return (memberData || []).filter(
		(res) =>
			res.state?.toLowerCase().includes(stateName.toLowerCase()) &&
			res.city?.toLowerCase().includes(cityName.toLowerCase())
	);
};

/**
 * @param {string} searchText text used to match for filtering
 * @param {object} memberData data to filter from
 * @return {object} filtered member data that matches name/username/company with searchText
 */
const getFilteredMembersBySearch = (searchText, memberData) => {
	return (memberData || []).filter(
		(res) =>
			res.name?.toLowerCase().includes(searchText.toLowerCase()) ||
			res.login?.toLowerCase().includes(searchText.toLowerCase()) ||
			res.company?.toLowerCase().includes(searchText.toLowerCase())
	);
};

const Header = ({ APIData, setFilteredMembers, setNoResults }) => {
	// state variable and function for getting and setting search and filter text
	const [searchText, setSearchText] = useState("");
	const [stateName, setStateName] = useState("");
	const [cityName, setCityName] = useState("");

	const cityList = useCities(stateName, stateCityMap);

	const { theme, setTheme } = useContext(ThemeContext);

	// skip useEffect written to display filtered data during first render
	const isFirstRender = useRef(true);
	useEffect(() => {
		if (isFirstRender.current) {
			isFirstRender.current = false;
			return;
		}
		inputHandler();
	}, [stateName, cityName]);

	/**
	 * Event handler for the search form
	 * @param {object} e event to be handled
	 */
	const inputHandler = () => {
		// get filtered member list by passing APIData as the main data to filter from
		const filteredMembers = getFilteredMembers(
			searchText,
			stateName,
			cityName,
			APIData
		);

		if (filteredMembers?.length) {
			setFilteredMembers(filteredMembers);
			setNoResults(false);
		} else {
			setNoResults(true);
		}
	};

	// component with a search bar and state and city filters
	return (
		<div className="header">
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
				data-theme={theme === "light" ? "light" : "dark"}
			/>

			<select
				value={stateName}
				onChange={(e) => {
					setStateName(e.target.value);
				}}
				data-theme={theme === "light" ? "light" : "dark"}
			>
				<option key={"All States"} value={""}>
					Select State
				</option>

				{Object.keys(stateCityMap).map((entry) => {
					// replace trailing * in data
					entry = entry.replace(/\*$/, "");

					return (
						<option key={entry} value={entry}>
							{entry}
						</option>
					);
				})}
			</select>

			<select
				value={cityName}
				onChange={(e) => {
					setCityName(e.target.value);
				}}
				data-theme={theme === "light" ? "light" : "dark"}
			>
				<option key={"All Cities"} value={""}>
					Select City
				</option>

				{cityList?.map((entry) => {
					// replace trailing * in data
					entry = entry.replace(/\*$/, "");

					return (
						<option key={entry} value={entry}>
							{entry}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default Header;
