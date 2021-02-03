import React from "react";
import { Switch, Route } from "react-router-dom";
import HomeContainer from './Home/HomeContainer'

export default function Routes() {
  return (
    <Switch>
      <Route path="/home">
        <HomeContainer />
      </Route>
    </Switch>
  );
}

