// Since App.js is added as a module, we can import packages here using import statement
import ReactDOM from "react-dom/client";

import Navbar from "./components/Navbar.js";
import Card from "./components/Card.js";
import { Team } from "./data/Team";

const CardContainer = () => {
	return Team.map((member) => (
		<Card member={member}/>
	));	
};

// define the root in the DOM to render react elements
const react_root = ReactDOM.createRoot(document.getElementById("root"));
// push react elements into the root
react_root.render(
	<>
		<Navbar/>
		<div className="card-container">
			<CardContainer/>
		</div>
	</>
);