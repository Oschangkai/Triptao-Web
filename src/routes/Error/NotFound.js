import React from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

import "./Error.less";

export default class NotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="cont">
          <p
            style={{
              letterSpacing: 20,
              fontSize: 300,
              fontWeight: 300
            }}
          >
            404
          </p>
          <p style={{ fontSize: 23, fontWeight: 300, right: 0 }}>
            這位施主<br />您&nbsp;&nbsp;&nbsp;似乎走錯地方了
          </p>
          <br />
          <br />
          <br />
          <br />
          <Link to="/dashboard">
            <Button type="primary" size={`large`}>
              來逛逛這裡吧
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}
