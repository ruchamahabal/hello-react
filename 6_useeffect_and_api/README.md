## Promise.all()

- `inputArray.map(async ...)` returns an array of promises - one for each value in `inputArray`.
- Putting `Promise.all()` around the array of promises converts it into a single promise.
- The single promise from `Promise.all()` returns an array of values - the individual promises each resolving to one value.
- We put await in front of `Promise.all()` so that we can wait for the combined promise to resolve and store the array of resolved sub-promises into the variable `resultArray`.
- In the end we get one output value in `resultArray` for each item in inputArray, mapped through the function someAsyncFunction. We have to wait for all async functions to resolve before the result is available.