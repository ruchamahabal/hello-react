# Building a Single Page using functional components

## Config-driven UI

- If we have to implement dynamic UI with components, for example, different banners for each region, as per date and time, it becomes tedious if hard coded. 
- In config-driven UI, the entire UI is dynamically updated based on the config provided by the server. Eg: which locations (Delhi, Mumbai) to show carousels on, show offer banners to selective users. This config comes from JSON and UI automatically handles and updates as per the config. 
- Instead of writing never-ending hard-coded layouts of UI, the UI is rendered from API as JSON.
- We generate a config in `data/Team.js` with all the details of the team members.

## Component structing & imports/exports

- It is better to keep reusable components in a separate js file of their own like card, button, etc. While importing components, react allows us to skip the .js extension but it is always better to make this explicit.
- A module is a self-contained unit that can expose assets to other modules using export, and acquire assets from other modules using import.
- In ES6 there are two kinds of exports:
	- **Default Export**: used when you want to export only one object(variable, function, class) from the file(module), only one default export is allowed per file and it can be renamed while importing
	- **Export or Named Export**: It is used to export the object(variable, function, class) or multiple objects. It cannot be renamed while importing and must have the same name used while exporting.

## Props

- Components accept arbitrary inputs called props (properties).
- Whenever we build a functional component in React, it passes a default argument inside the functional component called props.
- This is similar to the second argument we pass in React.createElement:
	```javascript
	React.createElement(
		“h1”, 
		{“class”: “title”}, // ←props
		[]
	)
	```
- We can access the props in the functional component
	```javascript
	function Avatar(props) {
		return (
			<img className="Avatar"
			src={props.user.avatarUrl}
			alt={props.user.name}
			/>
		);
	}
	```
- We can get rid of the redundant "props" reference by destructuring the properties:
	```javascript
	const CardComponent = ({ restraunt }) => {
		const { img, name, cusine, stars } = restraunt;
		return (
			<div id="card" className="card">
			<img src={img} />
			<h2>{name}</h2>
			<h3>{cusine}</h3>
			<h4>{stars} stars</h4>
			</div>
		);
	};
	```

## Keys in React Lists

- While dealing with arrays, or maps, always have a unique property/key assigned to components. Generally, these IDs come back from the backend.
- Keys help React identify which items have changed (added/removed/re-ordered). To give a unique identity to every element inside the array, a key is required.
- If there are millions of cards on the page, and if there is some operation to be done on specific cards, or showing specific UI like high rating, delete button, close menu, etc, it becomes easier for React when all children in a list have unique IDs to find the exact card and make the changes/update the state.
- Hence, if we give duplicate keys, this main purpose is defeated. The warning clearly says that non-unique keys may cause children to be duplicated or omitted.
- React recommends that you do not use indexes as keys, since it could impact performance negatively and could lead to some unstable component behavior.