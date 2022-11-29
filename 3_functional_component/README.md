# Functional Components and JSX

## JSX

- JSX is Javascript XML (not the full form)
- Allows us to add HTML-like syntax in javascript
- We can write JSX as expressions 
- JSX does not cause any performance difference because it's transpiling into the same HTML code, under the hood.
- If someone injects malicious JS code in your console, they can get access to cookies, sessions, passwords, etc. JSX prevents cross-site scripting and injection attacks. It escapes/sanitizes the code for better security.

### Difference between JSX and createElement

- createElement creates a Javascript object which creates the h1 tag in DOM
- JSX internally behind the scenes, also uses React.createElement that creates an Object which creates the h1 tag in DOM
- Both do the same thing, but JSX is more readable as compared to createElement.
- If we have to create nested elements using createElement the code becomes unreadable and unmaintainable.
- Instead of using createElement, JSX helps us to “think” and write in HTML-like syntax. Instead of putting markup and logic in separate files, React has components that contain both.


## Functional Component

- A very small element of react code is called a component.
- Functional component is a composition of react elements. If a function returns some react element, it becomes a functional component.
- Generally created using arrow functions
- Functional components can also be nested one inside another.

## Common conventions/syntax

- String interpolation (insert expression vals into literal strings) can be done in JSX by writing any valid javascript in {}
- In JSX, attributes/properties in HTML-like syntax like class, tab-index, etc, need to be written in camel casing: className, tabIndex.
- Functional components are written using pascal casing, and can be nested
- While passing JSX to be rendered, a single element should be passed. So if we have more than one element to be returned, it can be enclosed in React.Fragment or empty angular brackets.
eg:
```
	<>
		<Navbar/>
		<div className="centered-div">
			{heading}<br/>
			{jsx_heading}<br/>
			<HeadingComponent/>
		</div>
	</>
```

```
	<React.Fragment>
		<Navbar/>
		<div className="centered-div">
			{heading}<br/>
			{jsx_heading}<br/>
			<HeadingComponent/>
		</div>
	</React.Fragment>
```

