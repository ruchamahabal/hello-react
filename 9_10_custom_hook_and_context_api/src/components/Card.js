import { useContext } from "react";

import ThemeContext from "../contexts/ThemeContext";

import company_logo from "../assets/images/company.svg";
import company_dark from "../assets/images/company_dark.svg";
import location_logo from "../assets/images/location.svg";
import location_dark from "../assets/images/location_dark.svg";

const Card = ({ member }) => {
	const {
		avatar_url,
		login,
		name,
		followers,
		following,
		location,
		city,
		company,
	} = member;

	const { theme, setTheme } = useContext(ThemeContext);

	return (
		<div
			className="card"
			data-theme={`${theme === "light" ? "light" : "dark"}`}
		>
			<div className="card-header">
				<img className="member-img round" src={avatar_url}></img>
				<h2 className="card-title">{name ? name : login}</h2>
				<p className="followers text-muted">
					{`Followers: ${followers}  |  Following: ${following}`}
				</p>
			</div>
			<div className="details">
				{company && (
					<div className="detail-row">
						<img
							className="icon"
							src={
								theme === "light" ? company_logo : company_dark
							}
						></img>
						<p className="company">
							{`${company.replace(/^@/, "")}`}
						</p>
					</div>
				)}
				{(location || city) && (
					<div className="detail-row">
						<img
							className="icon"
							src={
								theme === "light"
									? location_logo
									: location_dark
							}
						></img>
						<p className="location">{`${location || city}`}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
