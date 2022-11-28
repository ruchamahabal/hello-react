// Since App.js is added as a module, we can import packages here using import statement
import {createElement} from "react";
import ReactDOM from "react-dom/client";

import logo from "./assets/logo.png";
import avatar from "./assets/avatar.png";

/* Heading using createElement: Top-level APIs are available on the React global */
const heading = createElement("div", {"className": "heading-div"}, [
	createElement("h1", {"id": "heading", "className": "content"}, "React Bootcamp"),
	createElement("h2", {"className": "content"}, "From Zero to Hero"),
	createElement("h3", {"className": "content"}, "in three months")
]);


/* Heading using JSX */
// using string interpolation (insert expression vals into literal strings)
// we can write any valid JS in {}
const noOfMonths = 3;
const jsx_heading = (
	// properties with 2 words need to be written in camel casing in JSX
	<div id="jsx-heading" className="heading-div">
		<h1>React Bootcamp (using JSX)</h1>
		<h2>From Zero to Hero</h2>
		<h3>in {noOfMonths} months</h3>
	</div>
);

/* Heading using functional component */
// functional components are written in title cases. We can nest functional components.
const TitleComponent = () => <h1>React Bootcamp (using functional component)</h1>;
const HeadingComponent = () => {
	return (
		<div id="title" className="heading-div">
			{<TitleComponent/>}
			<h2>From Zero to Hero</h2>
			<h3>in {noOfMonths} months</h3>
		</div>
	)
};

/* Navbar using functional component */
const Navbar = () => {
	return (
		<div className="navbar">
			<div className="logo">
				<img src={logo} alt="logo"></img>
				<h1 className="title">React</h1>
			</div>
			 <div className="search-container">
				<input type="text" placeholder="Search..." className="search-bar" autoFocus/>
			</div>
			<img className="avatar" src={avatar} alt="avatar" />
		</div>
	)
};


// define the root in the DOM to render react elements
const react_root = ReactDOM.createRoot(document.getElementById("root-with-react"));
// push react elements into the root
react_root.render(
	// we need to pass a single element to root for rendering. 
	// we can enclose 2 elements in an empty bracket/fragment
	<>
		<Navbar/>
		<div className="centered-div">
			{heading}<br/>
			{jsx_heading}<br/>
			<HeadingComponent/>
		</div>
	</>
);