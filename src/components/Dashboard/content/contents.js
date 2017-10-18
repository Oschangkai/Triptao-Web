import React from "react";
import { Route, Switch } from "react-router-dom";

import info from "./info";

import Details from "./details";
import newDetails from "./details/newDetails";

import activity from "./activity";

import surprise from "./surprise";

import game from "./game";
import newgame from "./game/newgame";

import coupon from "./coupon";
import newcoupon from "./coupon/newcoupon";

import broadcast from "./broadcast";

import content from "./content";

export default class Contents extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/dashboard/info" component={info} />

        <Route exact path="/dashboard/details" component={Details} />
        <Route exact path="/dashboard/details/new" component={newDetails} />

        <Route exact path="/dashboard/activity" component={activity} />
        <Route exact path="/dashboard/activity/new" component={content} />

        <Route exact path="/dashboard/offer/surprise" component={surprise} />
        <Route exact path="/dashboard/offer/surprise/new" component={content} />

        <Route exact path="/dashboard/offer/coupon" component={coupon} />
        <Route exact path="/dashboard/offer/coupon/new" component={newcoupon} />

        <Route exact path="/dashboard/offer/game" component={game} />
        <Route exact path="/dashboard/offer/game/new" component={newgame} />

        <Route exact path="/dashboard/broadcast" component={broadcast} />
        <Route exact path="/dashboard/broadcast/new" component={content} />

        <Route component={content} />
      </Switch>
    );
  }
}
