# useEffect

- Hook that manages side-effects in functional React components.
- Examples of side-effects are fetch requests, manipulating DOM directly, using timer functions like setTimeout(), and more.
The component rendering and side-effect logic are independent. It would be a mistake to perform side-effects directly in the body of the component, which is primarily used to compute the output.
- `useEffect(callback[, dependencies])`
- Arguments:
		- `callback` is the function containing the side-effect logic. callback is executed right after changes were being pushed to DOM.
		- `dependencies`: an optional array of dependencies. Signifies  "subscriptions" to changes/event handlers. An array to specify when to apply the effect. An empty array signifies calling the function only on render.

```javascript
function Greet({ name }) {
	const message = `Hello, ${name}!`; // Calculates output

	// Bad!
	document.title = `Greetings to ${name}`; // Side-effect!
	return <div>{message}</div>;       // Calculates output
}
```

- How to decouple rendering from the side-effect? Welcome useEffect() — the hook that runs side-effects independently of rendering.

```javascript
import { useEffect } from 'react';
function Greet({ name }) {
	const message = `Hello, ${name}!`;   // Calculates output
	useEffect(() => {
		// Good!
		document.title = `Greetings to ${name}`; // Side-effect!
	}, [name]);
	return <div>{message}</div>;         // Calculates output
}
```

# Extra references

### Promise.all()

- `inputArray.map(async ...)` returns an array of promises - one for each value in `inputArray`.
- Putting `Promise.all()` around the array of promises converts it into a single promise.
- The single promise from `Promise.all()` returns an array of values - the individual promises each resolving to one value.
- We put await in front of `Promise.all()` so that we can wait for the combined promise to resolve and store the array of resolved sub-promises into the variable `resultArray`.
- In the end we get one output value in `resultArray` for each item in inputArray, mapped through the function someAsyncFunction. We have to wait for all async functions to resolve before the result is available.

### Local storage for persistent data/avoiding rate limit errors

(Reference)[https://felixgerschau.com/react-localstorage/]

# Routing

- Library for routing: https://reactrouter.com/en/main
- Installation:`npm i react-router-dom`

## Server-side vs Client-side routing:

- **Server-side routing**: Routing using the anchor tag, requests the server for the page, and loads it in. It's a whole new page rendering/re-rendering.
- **Client-side routing**: Not calling server-side, and does not reload main components on the page. Just renders parts of the page. We use react-router for client-side routing. Helps us build super-fast SPAs (Single page applications).

## createBrowserRouter

- Create a root-level router using createBrowserRouter: which takes in an array of routes where each route contains the path and the React element to be rendered on that path. Here we are telling the router to render the AppLayout component on the "/" path and the AboutUs component on the "/about-us" path.
- In the root, we then register `appRouter` as our `RouterProvider`.

```javascript
const AppLayout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	)
}

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <MemberList />
			},
			{
				path: "/member/:username",
				element: <MemberDetails />,
			},
		]
	},
	{
		path: "/about-us",
		element: <AboutUs />,
	},
]);

// define the root in the DOM to render react elements
const react_root = ReactDOM.createRoot(document.getElementById("root"));
// push react elements into the root
react_root.render(<RouterProvider router={appRouter} />);
```

The details about the above snippet are explained below:

### Children in the route

- Consider a scenario where you want to show the same header on every route but the body changes. Eg: you want to show member list on / and member details info on /member/:username: In this case, you can specify children attribute to your route "/"
- Now you want to show these components on respective routes after the header component, so you can import `Outlet` from react-router-dom and add that component below `HeadingComponent`. All your children will get attached to the Outlet.

### Dynamic routing

- We can add dynamic routing for individual member pages
- `path: "/member/:username`
- We add a colon in our routes for dynamic attributes.

### Handling Errors

- We can create an Error Component.
- We can specify an error component for all our paths using the `errorElement` key in our router array.
- We can use the useRouteError hook to display extra information about the error. We just need to call the function `useRouteError` that returns us the errorData with the statusText or message.

```javascript
import { useRouteError } from "react-router-dom";

const Error = () => {
		const errorData = useRouteError();
		return (
				<div className="centered-div">
						<h2>Oops! Something went wrong!</h2>
						<p>{`${errorData.statusText} : ${errorData.message}`}</p>
				</div>
		)
}

export default Error;
```

### <Link>

- Component is used for anchor tags that react-router tracks and registers.
- You can specify the path to which you want to link the card component

```javascript
<Link to={`/member/${member.login}`} key={member.id}>
	<Card member={member}/>
</Link>
```

### useParams

- Hook to access route params.
- You can destructure and access all the route params by calling useParams() hook.

```javascript
let { username } = useParams();
```
