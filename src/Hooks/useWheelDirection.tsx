import * as React from "react";

type DirectionType = "up" | "down" | "idle";

/**
 * This method use for detecting vertical wheel direction. Useful for non-scrolling view ports.
 *
 * @param debounce in milliseconds. Default value is `0`
 *
 * @return
 * - direction: Scrolling direction. Default is `idle`
 */
export default function useWheelDirection(debounce = 0): DirectionType {
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>();
  const [state, setSate] = React.useState<DirectionType>("idle");
  const wheel = React.useCallback(
    ({ deltaY }: WheelEvent) => {
      timeoutRef.current && clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        if (deltaY === 0) setSate("idle");
        else if (deltaY > 0) setSate("down");
        else if (deltaY < 0) setSate("up");
      }, debounce);
    },
    [debounce]
  );

  React.useEffect(() => {
    window.addEventListener("wheel", wheel);
    return () => window.removeEventListener("wheel", wheel);
  }, [wheel]);

  return state;
}
