import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages";
import SeveralUseState from "./Pages/several-useState";
import ErrorBoundary from "./Pages/error-boundary";

function App() {
  return (
    <Router>
      <Switch>
        <Route key={"/"} path="/" exact={true}>
          <Home />
        </Route>
        <Route key={"/several-useState"} path="/several-useState" exact={true}>
          <SeveralUseState />
        </Route>
        <Route key={"/error-boundary"} path="/error-boundary" exact={true}>
          <ErrorBoundary />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
