import { Component } from "react";

class NestedChild extends Component {
	constructor(props) {
		super(props);

		console.log("Nested Child's constructor called");
	}

	render() {
		console.log("Nested Child's render called");

		return (
			<>
				Namaste React course takes you from zero to hero in 3 months
				with hands-on coding and theory assignments,
				<br /> interactive lectures, code reviews and a lot more! 🤓
			</>
		);
	}

	componentDidMount() {
		console.log("Nested Child's componentDidMount called");
	}

	componentDidUpdate() {
		console.log("Nested Child's componentDidUpdate called");
	}

	componentWillUnmount() {
		console.log("Nested Child's componentWillUnmount called");
	}

	shouldComponentUpdate() {
		console.log("Nested Child's shouldComponentUpdate called");
	}
}

export default NestedChild;
