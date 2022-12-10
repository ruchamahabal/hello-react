// Since App.js is added as a module, we can import packages here using import statement
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";

import { Team } from "./data/Team.js";

const CardContainer = ({ filteredMembers }) => {
	return filteredMembers.map((member) => (
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
	const [filteredMembers, setFilteredMembers] = useState(Team);

	useEffect(() => {
		getGithubUsersData();
	}, []);

	const getGithubUsersData = async () => {
		/**
		 * Putting `Promise.all()` around the array of promises converts it into a single promise.
		 * The single promise from `Promise.all()` returns an array of values
		 * i.e. the individual promises each resolving to one value.
		 */
		let usersData = await Promise.all(filteredMembers.map(async (member) => {
			const userInfo = await fetch(`https://api.github.com/users/${member.github}`);
			return await userInfo.json();
		}));

		return usersData;
	}

	return (
		<>
			<Navbar setFilteredMembers={setFilteredMembers}/>
			<div className="card-container">
				<CardContainer filteredMembers={filteredMembers} />
			</div>
		</>
	)
}

// define the root in the DOM to render react elements
const react_root = ReactDOM.createRoot(document.getElementById("root"));
// push react elements into the root
react_root.render(<AppLayout/>);