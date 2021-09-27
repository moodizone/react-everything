import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages";
import SeveralUseState from "./Pages/several-useState";

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
      </Switch>
    </Router>
  );
}

export default App;
