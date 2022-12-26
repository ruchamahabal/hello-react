import company_logo from "../assets/company.png";
import location_logo from "../assets/location.png";
import github_logo from "../assets/github.svg";

const Card = ({ member }) => {
	const {
		avatar_url,
		login,
		name,
		followers,
		following,
		location,
		company,
		html_url,
	} = member;

	return (
		<div className="card justify-space-between m-5 flex w-96 max-w-full flex-col flex-wrap items-center overflow-hidden rounded-2xl border-none p-5 text-center shadow-lg shadow-gray-200">
			<div className="card-header flex flex-col flex-wrap items-center">
				<img
					className="member-img h-44 max-w-full rounded-full border-x border-y border-solid border-slate-200 object-cover p-2"
					src={avatar_url}
				></img>
				<h2 className="card-title mt-2 mb-1 text-2xl font-bold text-slate-700">
					{name ? name : login}
				</h2>
				<p className="followers text-muted mt-2 text-base text-gray-400">
					{`Followers: ${followers}  |  Following: ${following}`}
				</p>
			</div>
			<div className="details my-5 flex flex-col flex-wrap items-start gap-3 text-base text-slate-700">
				{company && (
					<div className="detail-row flex flex-row flex-wrap justify-center gap-1">
						<img className="icon h-5 w-5" src={company_logo}></img>
						<p className="company">
							{`${company.replace(/^@/, "")}`}
						</p>
					</div>
				)}
				{location && (
					<div className="detail-row flex flex-row flex-wrap justify-center gap-1">
						<img className="icon h-5 w-5" src={location_logo}></img>
						<p className="location">{`${location}`}</p>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;

// .details {
// 	display: flex;
// 	flex-direction: column;
// 	gap: 10px;
// 	font-size: 15px;
// 	color: #192734;
// 	margin-top: 20px;
// 	margin-bottom: 20px;
// }

// .detail-row {
// 	display: flex;
// 	flex-direction: row;
// 	justify-content: baseline;
// 	align-items: flex-end;
// 	gap: 5px;
// }

// .icon {
// 	width: 18px;
// 	height: 18px;
// }
