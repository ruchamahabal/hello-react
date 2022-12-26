import React from "react";

import Emoji from "./Emoji";

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
		let emoji;

		if (show_emoji) {
			emoji = <Emoji />;
		}

		return (
			<>
				<h3 className="description text-muted max-w-4xl text-justify text-lg leading-8">
					{course_name} course takes you from zero to hero in{" "}
					{duration} months with hands-on coding and theory
					assignments, interactive lectures, code reviews and a lot
					more!
				</h3>
				<div className="flex-div mt-14 flex flex-col items-center justify-center">
					{emoji}
					<button
						className="cursor-pointer rounded-md border-none bg-black py-2 px-4 text-white shadow-sm"
						onClick={this.toggle_emoji}
					>
						{" "}
						Peekaboo!{" "}
					</button>
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
