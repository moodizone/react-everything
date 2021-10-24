import React, { DependencyList, useEffect } from "react";

type ReadyState = "inProgress" | "finished" | "idle";

export default function useDebounce(
  fn: Function,
  delay: number,
  deps: DependencyList
) {
  const callback = React.useRef<Function>(fn);
  const timeout = React.useRef<ReturnType<typeof setTimeout>>();
  const ready = React.useRef<ReadyState>("idle");
  const isReady = React.useCallback(() => ready.current, []);

  useEffect(() => {
    ready.current = "inProgress";
    timeout.current && clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      ready.current = "finished";
      callback.current();
    }, delay);
  }, [delay, deps]);

  return [isReady];
}
