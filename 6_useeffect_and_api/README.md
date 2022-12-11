## useEffect

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

## Extra references

### Promise.all()

- `inputArray.map(async ...)` returns an array of promises - one for each value in `inputArray`.
- Putting `Promise.all()` around the array of promises converts it into a single promise.
- The single promise from `Promise.all()` returns an array of values - the individual promises each resolving to one value.
- We put await in front of `Promise.all()` so that we can wait for the combined promise to resolve and store the array of resolved sub-promises into the variable `resultArray`.
- In the end we get one output value in `resultArray` for each item in inputArray, mapped through the function someAsyncFunction. We have to wait for all async functions to resolve before the result is available.

### Local storage for persistent data/avoiding rate limit errors

(Reference)[https://felixgerschau.com/react-localstorage/]