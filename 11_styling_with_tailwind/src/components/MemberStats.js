const MemberStats = ({ username }) => {
	return (
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
	);
};

export default MemberStats;
