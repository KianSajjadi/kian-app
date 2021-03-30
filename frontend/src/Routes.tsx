import React from "react";
import { Route, Switch } from "react-router-dom";
import { IndexKind } from "typescript";
import Login from "./containers/Login";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/Login">
        <Login />
      </Route>
			<Route path ="/index">
			</Route>
    </Switch>
  );
}
