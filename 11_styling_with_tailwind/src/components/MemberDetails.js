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
	} = member;

	return (
		<div className="items-left flex flex-col flex-wrap justify-center p-24">
			<div className="profile flex flex-wrap items-center gap-8 border-b border-solid border-slate-300 pb-14">
				<img
					className="h-64 max-w-full rounded-full border-x border-y border-solid border-slate-200 object-cover p-2"
					src={avatar_url}
				/>

				<div className="member-details flex flex-col flex-wrap justify-between gap-4">
					<h2 className="card-title mt-2 mb-1 text-2xl font-bold text-slate-700">
						{name ? name : login}
					</h2>
					<p className="bio text-md leading-8">{bio}</p>
					<p className="followers text-muted mt-2 text-base text-gray-400">
						{`Followers: ${followers}  |  Following: ${following}`}
					</p>
					<div className="details mt-2 flex flex-col flex-wrap items-start gap-2 text-base text-slate-700">
						{company && (
							<div className="detail-row flex flex-row flex-wrap justify-center gap-1">
								<img
									className="icon h-5 w-5"
									src={company_logo}
								></img>
								<p className="company">
									{`${company.replace(/^@/, "")}`}
								</p>
							</div>
						)}
						{location && (
							<div className="detail-row flex flex-row flex-wrap justify-center gap-1">
								<img
									className="icon h-5 w-5"
									src={location_logo}
								></img>
								<p className="location">{`${location}`}</p>
							</div>
						)}
					</div>
				</div>
			</div>

			<div className="stats flex flex-row flex-wrap justify-evenly gap-8 pt-12">
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
