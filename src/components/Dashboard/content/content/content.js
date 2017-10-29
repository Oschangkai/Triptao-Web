import React from "react";
import Map from "../../map";

export default class AdminContent extends React.Component {
  positions = [
    { lat: 25.0063972, lng: 121.3253326 },
    { lat: 25.0063229, lng: 121.3251877 },
    { lat: 25.0060501, lng: 121.3250198 }
  ];
  render() {
    return <Map positions={this.positions} />;
  }
}
