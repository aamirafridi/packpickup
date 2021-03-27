import "./App.css";

import { FunctionComponent } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

export const App: FunctionComponent = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail">
          <Detail />
        </Route>
      </Switch>
    </HashRouter>
  );
};
