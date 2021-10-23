import React from "react";

import ErrorBoundary from "../Pages/error-boundary";
import FullHeightScroll from "../Pages/full-height-scroll";
import SeveralUseState from "../Pages/several-useState";
import Home from "../Pages";

export interface RouteType {
  exact: boolean;
  key: React.Key;
  path: string;
  component: React.ComponentType<any>;
}

export type RouteKey =
  | "home"
  | "several-useState"
  | "error-boundary"
  | "full-height-scroll";

export const ROUTES: Record<RouteKey, RouteType> = {
  home: {
    exact: true,
    key: "home",
    path: "/",
    component: Home,
  },
  "several-useState": {
    exact: true,
    key: "several-useState",
    path: "/several-useState",
    component: SeveralUseState,
  },
  "error-boundary": {
    exact: true,
    key: "error-boundary",
    path: "/error-boundary",
    component: ErrorBoundary,
  },
  "full-height-scroll": {
    exact: true,
    key: "full-height-scroll",
    path: "/full-height-scroll",
    component: FullHeightScroll,
  },
};
