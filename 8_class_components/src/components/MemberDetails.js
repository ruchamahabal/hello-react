import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import company_logo from "../assets/company.png";
import location_logo from "../assets/location.png";

const Member = () => {
	let { username } = useParams();
	const [member, setMember] = useState("");

	if (!username) return;

	useEffect(() => {
		getMemberDetails();
	}, []);

	const getMemberDetails = async () => {
		const usersData = JSON.parse(sessionStorage.getItem("usersData") || []);
		let user;

		// check sessionStorage, else get data from github API
		if (usersData) {
			user = usersData.find((entry) => entry.login == username);
		} else {
			const userInfo = await fetch(
				`https://api.github.com/users/${username}`
			);
			user = await userInfo.json();
		}

		setMember(user);
	};

	if (!member) return;

	const {
		avatar_url,
		bio,
		name,
		login,
		followers,
		following,
		location,
		company,
		html_url,
	} = member;

	return (
		<div className="member-info">
			<div className="profile">
				<img className="member-img round" src={avatar_url} />

				<div className="member-details">
					<h2 className="card-title">{name ? name : login}</h2>
					<p className="bio">{bio}</p>
					<p className="followers text-muted">
						{`Followers: ${followers}  |  Following: ${following}`}
					</p>
					<div className="details">
						{company && (
							<div className="detail-row">
								<img className="icon" src={company_logo}></img>
								<p className="company">
									{`${company.replace(/^@/, "")}`}
								</p>
							</div>
						)}
						{location && (
							<div className="detail-row">
								<img className="icon" src={location_logo}></img>
								<p className="location">{`${location}`}</p>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="stats">
				<img
					src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dark&locale=en&count_private=true&border_radius=15&include_all_commits=true`}
					alt={`GitHub Stats: ${username}`}
				/>
				<img
					src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&border_radius=15`}
					alt={`GitHub Streak: ${username}`}
				/>
			</div>
		</div>
	);
};

export default Member;
