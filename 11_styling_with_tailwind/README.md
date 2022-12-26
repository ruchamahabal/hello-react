# Class-based components

- Class components are written by extending React.Component
- React injects props automatically in class components. We can access them using this.props.{propname} syntax. React is attaching props to the "this" keyword.
- Defining State in the constructor:
```javascript
constructor(props) {
	super(props);

	this.state = {
		course_name: "",
		duration: 0,
		show_emoji: true,
	};
}
```
- state can be updated using setState
```javascript
componentDidMount() {
	const { team_members, mentor } = this.props;
	this.setState({
		team_members: team_members,
		mentor: mentor,
	});
}
```

## Lifecycle methods

Lifecycle is majorly divided into 3 parts:

<img alt="image" src="/8_class_components/src/assets/component-lifecycle.png"/>

### 1. Mounting

#### constructor(props)

- Called before the component is mounted.
- Constructors are only used for two purposes:
	- Initializing local state by assigning an object to this.state.
	- Binding event handler methods to an instance.
- Only place where you should assign this.state directly. In all other methods, you need to use this.setState() instead.
- If you don’t initialize state and you don’t bind methods, you don’t need to implement a constructor for your React component.
- If we need access to the parent component's states and props, then super(props) needs to be called in the first line of the constructor. Otherwise, this.props will be undefined in the constructor, which can lead to bugs.

#### render()

- The only required method in a class component.
- Returns an element similar to what a functional component returns.
- This method helps us to return the JSX by consuming props and with the initial value of the state which was set in the constructor.
- The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it’s invoked, and it does not directly interact with the browser.

#### componentDidMount()

- Invoked immediately after the component is mounted (inserted into the tree). Similar to what useEffect does.
- Can be used for:
	- Initialization that requires DOM nodes
	- Load data, network calls
	- Setting up subscriptions (should be unsubscribed in componentWillUnmount())

### 2. Updating

#### render()

- Called when state/props are modified in componentDidMount or when actual data is fetched in order to re-render the component.
componentDidUpdate()
- Not called on initial render. Called whenever the component is updated/re-rendered due to state/prop changes.

### 3. Unmounting

#### componentWillUnmount()

- Invoked immediately before the component is unmounted and destroyed.
- Can be used for:
	- Handling exit codes/cleanups
	- Invalidating timers/removing set timeouts
	- Canceling network requests
	- Removing event listeners
	- Cleaning up subscriptions that were created in componentDidMount()
- You should not call setState() in componentWillUnmount() because the component will never be re-rendered. Once a component instance is unmounted, it will never be mounted again.
