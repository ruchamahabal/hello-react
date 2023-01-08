import { useParams } from "react-router-dom";

import MemberProfile from "./MemberProfile";
import MemberStats from "./MemberStats";

const MemberDetails = () => {
	let { username } = useParams();

	return (
		<div className="member-info">
			<MemberProfile username={username} />
			<MemberStats username={username} />
		</div>
	);
};

export default MemberDetails;
