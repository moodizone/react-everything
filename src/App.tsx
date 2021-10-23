import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ROUTES } from "./Router";

function App() {
  return (
    <Router>
      <Switch>
        {Object.values(ROUTES).map(
          ({ exact, key, path, component: Component }) => (
            <Route key={key} path={path} exact={exact}>
              <Component />
            </Route>
          )
        )}
      </Switch>
    </Router>
  );
}

export default App;
