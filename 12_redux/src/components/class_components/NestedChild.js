import React from "react";

import Emoji from "./Emoji";

import ThemeContext from "../../contexts/ThemeContext";

class NestedChild extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			course_name: "",
			duration: 0,
			show_emoji: true,
		};
		console.log("Nested Child's constructor called");
	}

	toggle_emoji = () => {
		this.setState({ show_emoji: !this.state.show_emoji });
	};

	render() {
		console.log("Nested Child's render called");

		const { course_name, duration, show_emoji } = this.state;
		const { theme, setTheme } = this.context;

		let emoji = show_emoji ? <Emoji /> : "";

		return (
			<>
				<h3 className="description text-muted">
					{course_name} course takes you from zero to hero in{" "}
					{duration} months with hands-on coding and theory
					assignments, interactive lectures, code reviews and a lot
					more!
				</h3>
				<div className="flex-div" data-theme={theme}>
					{emoji}
					<button onClick={this.toggle_emoji}> Peekaboo! </button>
				</div>
			</>
		);
	}

	componentDidMount() {
		console.log("Nested Child's componentDidMount called");

		const { course_name, duration } = this.props;
		this.setState({
			course_name: course_name,
			duration: duration,
		});
	}

	componentDidUpdate() {
		console.log("Nested Child's componentDidUpdate called");
	}
}

NestedChild.contextType = ThemeContext;

export default NestedChild;
