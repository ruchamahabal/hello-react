import React from "react";

import NestedChild from "./NestedChild";

class AboutUsChildSection extends React.Component {
	constructor(props) {
		super(props);

		console.log("Child constructor called");
	}

	render() {
		console.log("Child render called");

		return (
			<h3 className="text-muted">
				A team of 10 engineers exploring and learning React from the
				greatest Javascript teacher: Akshay Saini
				<br />
				<br />
				<NestedChild />
			</h3>
		);
	}

	componentDidMount() {
		console.log("Child's componentDidMount called");
	}

	componentDidUpdate() {
		console.log("Child's componentDidUpdate called");
	}

	shouldComponentUpdate() {
		console.log("Child's shouldComponentUpdate called");
	}

	componentWillUnmount() {
		console.log("Child's componentWillUnmount called");
	}
}

export default AboutUsChildSection;
