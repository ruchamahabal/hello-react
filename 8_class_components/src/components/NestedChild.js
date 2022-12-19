import { Component } from "react";

class Emoji extends Component {
	render() {
		return (
			<>
				<span className="emoji">🤗</span>
				<br />
			</>
		);
	}

	// Defining the componentWillUnmount method
	componentWillUnmount() {
		alert("The component is going to be unmounted");
	}
}

class NestedChild extends Component {
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
		let emoji;

		if (show_emoji) {
			emoji = <Emoji />;
		}

		return (
			<>
				{course_name} course takes you from zero to hero in {duration}{" "}
				months with hands-on coding and theory assignments,
				<br /> interactive lectures, code reviews and a lot more!
				<div className="flex-div">
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

export default NestedChild;
