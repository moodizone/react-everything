### Several `useState`

- Several `useState` trigger one render at each cycle.
- (?) `mountCount === 0` even after effect.
- `updateCount` works as expected.
- `lazyInitializer` works as expected.
