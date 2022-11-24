// Since App.js is added as a module, we can import packages here using import statement
import {createElement} from "react";
import ReactDOM from "react-dom/client";

// Top-level APIs are available on the React global
const react_heading = createElement("div", {"class": "centered-div"}, [
	createElement("h1", {"id": "heading", "class": "content"}, "React Bootcamp"),
	createElement("h2", {"class": "content"}, "From Zero to Hero"),
	createElement("h3", {"class": "content"}, "in three months")
]);

// define the root in the DOM to render react elements
const react_root = ReactDOM.createRoot(document.getElementById("root-with-react"));
// push react elements into the root
react_root.render(react_heading);