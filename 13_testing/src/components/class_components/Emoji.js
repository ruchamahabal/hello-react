import React from "react";

class Emoji extends React.Component {
	render() {
		return (
			<>
				<span className="emoji">🤗</span>
			</>
		);
	}

	// Defining the componentWillUnmount method
	componentWillUnmount() {
		alert("The component is going to be unmounted");
	}
}

export default Emoji;
