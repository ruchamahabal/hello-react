import company_logo from "../assets/images/company.png";
import location_logo from "../assets/images/location.png";
import github_logo from "../assets/images/github.svg";

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
		html_url,
	} = member;

	return (
		<div className="card">
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
						<img className="icon" src={company_logo}></img>
						<p className="company">
							{`${company.replace(/^@/, "")}`}
						</p>
					</div>
				)}
				{(location || city) && (
					<div className="detail-row">
						<img className="icon" src={location_logo}></img>
						<p className="location">{`${location || city}`}</p>
					</div>
				)}
			</div>
			<div className="card-footer social-icon">
				<a href={html_url}>
					<img src={github_logo} alt="Github Logo" />
				</a>
			</div>
		</div>
	);
};

export default Card;
