import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Card from "./Card.js";
import SearchBar from "./SearchBar.js";
import NoResults from "./NoResults.js";


const CardContainer = ({ memberData }) => {
	return (memberData || []).map((member) => (
		<Link to={`/member/${member.login}`} key={member.id}>
			<Card member={member}/>
		</Link>
	));
};

const MemberList = () => {
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
			<SearchBar APIData={APIData} setFilteredMembers={setFilteredMembers} setNoResults={setNoResults} />
            <div className="card-container">
				{
					noResults
						? <NoResults APIData={APIData} setFilteredMembers={setFilteredMembers} setNoResults={setNoResults} />
						: <CardContainer memberData={filteredMembers.length ? filteredMembers : APIData} />
				}
			</div>
        </>
    )
}

export default MemberList;