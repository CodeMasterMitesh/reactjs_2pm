# useEffect Hook

## What is useEffect?
`useEffect` is a React Hook that lets you run side effects after a component renders. Examples include:
- Updating the document title
- Fetching data
- Subscribing to events
- Starting timers

## Basic Syntax
```jsx
useEffect(() => {
  // side effect
  return () => {
    // cleanup (optional)
  };
}, [dependencies]);
```

## When It Runs
- **No dependency array**: runs after every render
- **Empty array `[]`**: runs once after the first render
- **With dependencies**: runs when any dependency changes

## Cleanup
Cleanup runs when the component unmounts or before the effect re-runs.
This prevents memory leaks or duplicate subscriptions.

```jsx
useEffect(() => {
  const id = setInterval(() => {
    console.log("tick");
  }, 1000);

  return () => clearInterval(id);
}, []);
```

## Example Summary (in UseEffectHook.jsx)
- **Effect 1** updates the browser tab title when `count` changes
- **Effect 2** starts a timer once and cleans it up on unmount

## Best Practices
- Keep effects small and focused
- Include all external values in the dependency array
- Use cleanup for subscriptions and timers
- Avoid using `useEffect` for simple derived state
