import React from "react";
import { Outlet } from "react-router-dom";

import ThemeContext from "../../contexts/ThemeContext";

class AboutUs extends React.Component {
	constructor(props) {
		/**
		 * If we need access to the parent component's states and props, then
		 * super(props) needs to be called in the first line of the constructor
		 */
		super(props);
		this.state = { team_name: "" };

		console.log("Parent's Constructor called");
	}

	render() {
		/**
		 * React class components must have a render method
		 * Returns the element similar to what a functional component returns
		 */

		console.log("Parent's render called");

		// accessing the context
		const { theme, setTheme } = this.context;

		return (
			<div className="centered-div">
				<h2 className="title" data-theme={theme}>
					Team {this.state.team_name}
				</h2>
				<Outlet />
			</div>
		);
	}

	componentDidMount() {
		/**
		 * To do stuff after the component is mounted/rendered like useEffect
		 */
		this.setState({
			team_name: this.props.team_name,
		});

		console.log("Parent's componentDidMount called");
	}

	componentDidUpdate() {
		/**
		 * Called whenever there is a state/prop change
		 */
		console.log("Parent's componentDidUpdate called");
	}

	componentWillUnmount() {
		/**
		 * This is called when the component is about to be unmounted/removed from the UI
		 * Handles exit code/cleanups
		 * Can be used to remove event listeners, set timeouts, removing subscriptions to events, etc.
		 */
		console.log("Parent's componentWillUnmount called");
	}
}

// setting the context for the class
AboutUs.contextType = ThemeContext;

export default AboutUs;
