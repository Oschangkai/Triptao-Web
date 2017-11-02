import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import "./Home.less";

export default class Home extends React.Component {
  render() {
    return (
      <div className="outer">
        <img
          src={process.env.PUBLIC_URL + "/img/logo.png"}
          height={300}
          alt="Triptao Logo"
        />
        <br />
        <Link to="/dashboard">
          <Button type="primary" size={`large`}>
            由此進入
          </Button>
        </Link>
      </div>
    );
  }
}
