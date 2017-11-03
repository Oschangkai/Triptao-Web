import React from "react";
import { Spin } from "antd";

export default class AdminContent extends React.Component {
  state = {
    loading: true
  };
  componentDidMount() {
    this.setState({
      loading: false
    });
  }
  render() {
    return (
      <Spin spinning={this.state.loading}>
        <h1>哈囉！</h1>
        <p
          style={{
            color: "black",
            paddingLeft: 15,
            paddingTop: 10,
            fontSize: 14
          }}
        >
          這裡是 Triptao 的後台，請在左側選擇你要的欄位，填寫你要的資料唷！
        </p>
      </Spin>
    );
  }
}
