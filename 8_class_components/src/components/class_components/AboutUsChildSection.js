import React from "react";

import NestedChild from "./NestedChild";

class AboutUsChildSection extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			team_members: 0,
			mentor: "",
		};

		console.log("Child constructor called");
	}

	render() {
		console.log("Child render called");

		const { team_members, mentor, course_name, duration } = this.props;
		return (
			<h3 className="text-muted">
				A team of {team_members} engineers exploring and learning React
				from the greatest Javascript teacher: {mentor}
				<br />
				<br />
				<NestedChild course_name={course_name} duration={duration} />
			</h3>
		);
	}

	componentDidMount() {
		console.log("Child's componentDidMount called");

		const { team_members, mentor } = this.props;
		this.setState({
			team_members: team_members,
			mentor: mentor,
		});
	}

	componentDidUpdate() {
		console.log("Child's componentDidUpdate called");
	}
}

export default AboutUsChildSection;
