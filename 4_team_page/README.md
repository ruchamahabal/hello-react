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

### Passing Props

- React components use props to communicate with each other. 
- Every parent component can pass some information to its child components by giving them props.
- Whenever we need to modify something, we need to find it's root/parent.

#### Passing props to child components

- For eg: Here `AppLayout` is passing props `setFilteredMembers` and `filteredMembers` to `Navbar` and `CardContainer` respectively.

```javascript
const AppLayout = () => {
	/*
	 * using filteredMembers state variable
	 * and setFilteredMembers to render data based on search results
	 * passing setFilteredMembers function prop to Navbar -> SearchBar for controlling what data needs to be displayed
	 * passing filteredMembers to CardContainer to display data based on the results
	*/
	const [filteredMembers, setFilteredMembers] = useState(Team);

	return (
		<>
			<Navbar setFilteredMembers={setFilteredMembers}/>
			<div className="card-container">
				<CardContainer filteredMembers={filteredMembers} />
			</div>
		</>
	)
}
```

#### Reading props inside child components

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
	const CardComponent = ({ restaurant }) => {
		const { img, name, cusine, stars } = restaurant;
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

## React Hooks

- A JS function that helps us with some functionality. They let you use the state and other react features without writing a class.
- They help us write pure functional components.
- Hooks run each time component re-renders. Each time state or a prop is changed, the functional component is being re-rendered and, thus, our custom hook is being called over and over again.

### State

- Snapshot of data in your component. State is an object that holds the current data of the component.
- Whenever there is a change in state the component re-renders to reflect the current state value.

#### State hook: useState

- State can be accessed and modified using the useState hook provided by react.
- useState is a way for react to know that there is a local variable now set in.
- It takes the initial state.default value for the variable as an argument. In this case, the string "".

```javascript
import { useState } from "react";
const [searchText, setSearchText] = useState("");
```

#### Two-way binding: setState

- We cannot modify state variables directly. We can do it using the setState function.
- React needs to know exactly when the text is getting modified. We can’t tamper with the variable directly. We can only set it by calling the setState function.
- `setState` returns an array and we access it using array destructuring. React gives you a state variable using useState and it also gives you a way to listen to that variable using `setState`.
- Here we are doing two-way binding: using useState to get the text in the search bar and using setState to listen to the text change and set the new state/text in the search bar.
- In this case, setSearchText function that we accept as the second element in the array.

```javascript
const [searchText, setSearchText] = useState(“”);
```

- We can then setup `onChange` listener for the search box and set the text using setSearchText:

```javascript
onChange = {(e) => {
       setSearchText(e.target.value);
}}
```
