import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Auth from "./Auth";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Home from "./Home";
import NotFound from "./Error/NotFound";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <Home {...props} />} />
      <Route exact path="/login" render={props => <Login {...props} />} />
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/auth" render={props => <Auth {...props} />} />
      <Route path="/dashboard" render={props => <Dashboard {...props} />} />
      <Route render={props => <NotFound {...props} />} />
    </Switch>
  </BrowserRouter>
);
