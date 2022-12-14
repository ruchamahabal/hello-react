import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import ThemeContext from "../contexts/ThemeContext";

import company_logo from "../assets/images/company.svg";
import company_dark from "../assets/images/company_dark.svg";
import location_logo from "../assets/images/location.svg";
import location_dark from "../assets/images/location_dark.svg";

const Member = () => {
	let { username } = useParams();
	const [member, setMember] = useState("");
	const { theme, setTheme } = useContext(ThemeContext);
	const is_theme_light = theme === "light";

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
	} = member;

	return (
		<div className="member-info">
			<div className="profile" data-theme={theme}>
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
								<img
									className="icon"
									src={
										is_theme_light
											? company_logo
											: company_dark
									}
								></img>
								<p className="company">
									{`${company.replace(/^@/, "")}`}
								</p>
							</div>
						)}
						{location && (
							<div className="detail-row">
								<img
									className="icon"
									src={
										is_theme_light
											? location_logo
											: location_dark
									}
								></img>
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
