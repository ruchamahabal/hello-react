import React from "react";

class Emoji extends React.Component {
	render() {
		return (
			<>
				<span className="emoji mb-4 text-5xl">🤗</span>
			</>
		);
	}

	// Defining the componentWillUnmount method
	componentWillUnmount() {
		alert("The component is going to be unmounted");
	}
}

export default Emoji;
