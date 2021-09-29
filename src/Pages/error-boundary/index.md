### Error Boundary

1- `<ErrorBoundary />` catch **only** descendant errors (not is being used component)

2- Sadly, `<ErrorBoundary />` doesn't support:

- Event handlers
- Async Code
- SSR
- Error in boundary itself

3- Async and Event errors should be caught imperatively (try-catch)
