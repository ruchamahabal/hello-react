// Since App.js is added as a module, we can import packages here using import statement
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import NoResults from "./components/NoResults.js";

const CardContainer = ({ memberData }) => {
	return (memberData || []).map((member) => (
		<Card member={member} key={member.id}/>
	));	
};

const AppLayout = () => {
	/*
	 * using filteredMembers state variable
	 * and setFilteredMembers to render data based on search results
	 * passing setFilteredMembers function prop to Navbar -> SearchBar for controlling what data needs to be displayed
	 * passing filteredMembers to CardContainer to display data based on the results
	*/
	const githubUserNames = ["ruchamahabal", "upaharika", "rishav-sah", "Pratik33", "vinaysaip", "shubhamyadav30", "ShailendraSinghRaikwar", "abhishekps782", "mojahidhd", "taj0598"];

	const [filteredMembers, setFilteredMembers] = useState([]);
	const [APIData, setAPIData] = useState([]);
	const [noResults, setNoResults] = useState(false);

	useEffect(() => {
		/**
		 * use the API data stored in session storage if available
		 * else call the API and update the state variable
		 */
		if (sessionStorage.getItem("usersData")) {
			setAPIData(JSON.parse(sessionStorage.getItem("usersData")));
		} else {
			getGithubUsersData().then((usersData) => {
				setAPIData(usersData);
			});
		}
	}, []);

	const getGithubUsersData = async () => {
		/**
		 * Putting `Promise.all()` around the array of promises converts it into a single promise.
		 * The single promise from `Promise.all()` returns an array of values
		 * i.e. the individual promises each resolving to one value.
		 */
		let usersData = await Promise.all(githubUserNames.map(async (username) => {
			const userInfo = await fetch(`https://api.github.com/users/${username}`);
			return await userInfo.json();
		}));

		/**
		 * save the API data in session storage
		 * to avoid redundant API calls leading to rate limit errors
		 */
		sessionStorage.setItem("usersData", JSON.stringify(usersData));
		return usersData;
	}

	return (
		<>
			<Navbar APIData={APIData} setFilteredMembers={setFilteredMembers} setNoResults={setNoResults}/>
			<div className="card-container">
				{
					noResults
						? <NoResults />
						: <CardContainer memberData={ filteredMembers.length ? filteredMembers : APIData} />
				}
			</div>
		</>
	)
}

// define the root in the DOM to render react elements
const react_root = ReactDOM.createRoot(document.getElementById("root"));
// push react elements into the root
react_root.render(<AppLayout/>);