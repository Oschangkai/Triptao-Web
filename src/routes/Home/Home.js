import React from "react";
import { Button, Spin } from "antd";
import { Link } from "react-router-dom";

import "./Home.less";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  componentDidMount() {
    this.setState({
      loading: false
    });
  }
  render() {
    return (
      <Spin spinning={this.state.loading}>
        <div
          className="outer"
          style={{
            backgroundImage: "url(" + process.env.PUBLIC_URL + "/img/bk.png)"
          }}
        >
          <img
            src={process.env.PUBLIC_URL + "/img/logo.gif"}
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
      </Spin>
    );
  }
}
