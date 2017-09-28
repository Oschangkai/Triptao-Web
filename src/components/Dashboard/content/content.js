import React from "react";
import Map from "../map"
//import { Layout } from "antd";

//const { Content } = Layout;

export default class AdminContent extends React.Component {
  render() {
    return (
      <Map width="500" height="500" loc={input => this.getLoc(input)} />
    );
  }
}
