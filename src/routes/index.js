import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
//import { Link } from "react-router-dom";
import Auth from "./Auth";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Index from "./Index";
import E404 from "./Error/404";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" render={props => <Index {...props} />} />
      <Route exact path="/login" render={props => <Login {...props} />} />
      <Route exact path="/register" render={props => <Register {...props} />} />
      <Route exact path="/auth" render={props => <Auth {...props} />} />
      <Route path="/dashboard" render={props => <Dashboard {...props} />} />
      <Route render={props => <E404 {...props} />} />
    </Switch>
  </BrowserRouter>
);
