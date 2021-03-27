import "./App.css";

import { FunctionComponent } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { Header } from "./components/Header";
import { Detail } from "./pages/Detail";
import { Home } from "./pages/Home";

export const App: FunctionComponent = () => {
  return (
    <HashRouter basename="/">
      <Header />
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
