# throttle

Creates a throttled function that only invokes the provided function at most once
per every `throttleMs` milliseconds. Subsequent calls to the throttled function
within the wait time will not trigger the execution of the original function.


## Signature

```typescript
function throttle(func: () => void, throttleMs: number): () => void;
```

### Parameters 

- `func` (`() => void`): The function to throttle.
- `throttleMs`(`number`): The number of milliseconds to throttle executions to.

### Returns

(`() => void`): A new throttled function.


## Examples

```typescript
const throttledFunction = throttle(() => {
  console.log('Function executed');
}, 1000);

// Will log 'Function executed' immediately
throttledFunction();

// Will not log anything as it is within the throttle time
throttledFunction();

// After 1 second
setTimeout(() => {
  throttledFunction(); // Will log 'Function executed'
}, 1000);
```
