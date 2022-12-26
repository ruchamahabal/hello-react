## Custom Hook

- We can create custom hooks for reusable code.
- Hook functions must start with `use` as a common convention for hooks.

```javascript
const cityList = useCities(stateName);
```

## Lazy Loading

- By default, parcel (bundler) will load all assets. If we want to take control/take charge of what and when to load we can use lazy loading. Eg: When we are viewing home page, we don’t need to load modules for About Us page in our bundle.
- We should implement code splitting. This helps us “lazy-load” or render on demand, just the things that are currently needed by the user, which can dramatically improve the performance of your app.
- The React.lazy function lets you render a dynamic import as a regular component. It takes an arrow function to import our component on demand as a parameter. This must return a Promise which resolves to a module with a default export containing a React component.

```javascript
import React, { lazy } from "react";

const AboutUs = lazy(() => import("../components/AboutUs.js"));
```

## Suspense

- It’s a mechanism to communicate to React that the data a component is reading is not ready yet. React can then wait for it to be ready and update the UI.
- As a user is navigating through the application, and the code is being loaded on runtime, the user has to experience a delay until the network has finished loading and executing the next chunk of JavaScript code.
- This is where React.Suspense comes in handy, and displays a graceful loading state to the user. React.Suspense lets your users know that it’s loading the next chunk, will be with you shortly!
- We wrap the lazy-loading component inside Suspense and give it a fallback for loader. This is displayed while the component is being loaded.

```javascript
{
	path: "/about-us",
	element: (
		<Suspense fallback={<Loading />}>
			<AboutUs team_name="Web Pirates" />
		</Suspense>
	)
}
```

## Passing Data

Ways of passing or sharing data between components:
- Props Drilling
- Context API

### Prop Drilling

- Sometimes there is a need to pass data/state from a top-level component to a deeply nested component. Prop drilling refers to transporting this data/state as props to the intended destination through intermediate components.
- Passing props from down the hierarchy or in siblings is called props drilling.

#### Lifting the State Up

- Sometimes, you want the state of two components to always change together. To do it, remove state from both of them, move it to their closest common parent, and then pass it down to them via props. This is known as “lifting state up”, and it’s one of the most common things you will do writing React code.
- Eg: https://beta.reactjs.org/learn/managing-state#sharing-state-between-components


### Context API

In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

#### React.createContext

Creates a Context object. When React renders a component that subscribes to this Context object it will read the current context value from the closest matching Provider above it in the tree.

```javascript
import { createContext } from "react";

const ThemeContext = createContext({
	theme: "light",
	setTheme: () => {},
});

export default ThemeContext;
```

#### Context.Provider

- Every Context object comes with a Provider component that allows consuming components to subscribe to context changes.
- It accepts a value prop which can be used used by the components subscribed to context. One provider can have multiple consumers.
- All consumers that are descendants of a Provider will re-render whenever the Provider’s value prop changes.

```javascript
<ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
	<div>
		<Navbar />
		<Outlet />
	</div>
</ThemeContext.Provider>
```

#### Context.Consumer

- A react component that subscribes to the context changes. It requires a function as a child which receives current context value and returns a React node.

```javascript
<UserContext.Consumer>
	{(email) => {
		return <span>email</span>;
	}}
</UserContext.Consumer>
```

#### useContext hook

- useContext is a React Hook that lets you read and subscribe to context from your component.
- It’s a cleaner way to consume context than Consumer. Pass in what context we want to use.
- We can use set method to update the context. All components subscribed to the context get the updated value.

```javascript
import { useContext } from "react";
import ThemeContext from "../contexts/ThemeContext";

const {theme, setTheme} = useContext(ThemeContext);
```