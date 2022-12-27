import { useParams } from "react-router-dom";

import MemberProfile from "./MemberProfile.js";
import MemberStats from "./MemberStats";

const Member = () => {
	let { username } = useParams();

	return (
		<div className="items-left flex flex-col flex-wrap justify-center p-24">
			<MemberProfile username={username} />
			<MemberStats username={username} />
		</div>
	);
};

export default Member;
