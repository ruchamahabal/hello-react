// Top-level APIs are available on the React global
const react_heading = React.createElement(
	"h1", // element: the tag/component you want to create
	{ id: "title" }, // props: pass props like id, class, style, null, etc.
	"Hello World using React" // children
);

// define the root in the DOM to render react elements
const react_root = ReactDOM.createRoot(document.getElementById("root-with-react"));
// push react elements into the root
react_root.render(react_heading);