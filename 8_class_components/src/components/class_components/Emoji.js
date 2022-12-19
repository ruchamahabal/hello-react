import React from "react";

class Emoji extends React.Component {
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
		console.log("The component is going to be unmounted");
	}
}

export default Emoji;
