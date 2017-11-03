import React from "react";

export default class AdminContent extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
