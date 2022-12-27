import { useState, useEffect } from "react";

/**
 * A custom hook to return cities for the selected state
 * @param {string} stateName : The state for which cities need to be returned
 * @return {object} An array of cities belonging to the state
 */
const useCities = (stateName, stateCityMap) => {
	const [cities, setCities] = useState([]);

	useEffect(() => {
		function fetchCities() {
			const data = stateCityMap[stateName];
			setCities(data);
		}
		fetchCities();
	}, [stateName]);

	return cities;
};

export default useCities;
