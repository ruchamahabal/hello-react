import { Component } from "react";

class NestedChild extends Component {
	constructor(props) {
		super(props);

		this.state = {
			course_name: "",
			duration: 0,
		};
		console.log("Nested Child's constructor called");
	}

	render() {
		console.log("Nested Child's render called");

		const { course_name, duration } = this.state;
		return (
			<>
				{course_name} course takes you from zero to hero in {duration}
				months with hands-on coding and theory assignments,
				<br /> interactive lectures, code reviews and a lot more! 🤓
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

	componentWillUnmount() {
		console.log("Nested Child's componentWillUnmount called");
	}
}

export default NestedChild;
