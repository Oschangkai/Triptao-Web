import React from "react";
import { Button, Table } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import { Link } from "react-router-dom";
import "../table.less";

export default class broadcast extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "即時訊息內容",
        dataIndex: "broadcastcontent",
        key: "broadcastcontent"
      },
      { title: "即時訊息時間", dataIndex: "broadcasttime", key: "broadcasttime" },
      {
        title: "即時訊息地點",
        dataIndex: "broadcastlocation",
        key: "broadcastlocation"
      },
      {
        title: "刪除",
        dataIndex: "",
        key: "x",
        render: (text, record) => (
          <span
            className={`delete`}
            onClick={e => this.onDelete(record.key, e)}
          >
            刪除
          </span>
        )
      }
    ];

    this.enterAnim = [
      { opacity: 0, x: 30, backgroundColor: "#fffeee", duration: 0 },
      {
        height: 0,
        duration: 200,
        type: "from",
        delay: 250,
        ease: "easeOutQuad",
        onComplete: this.onEnd
      },
      { opacity: 1, x: 0, duration: 250, ease: "easeOutQuad" },
      { delay: 1000, backgroundColor: "#fff" }
    ];
    this.leaveAnim = [
      { duration: 250, opacity: 0 },
      { height: 0, duration: 200, ease: "easeOutQuad" }
    ];

    this.data = [
      {
        key: 1,
        broadcastcontent: "溜滑梯區有毒蛇出沒",
        broadcasttime: "14:00~16:00",
        broadcastlocation: "溜滑梯"
      },
      {
        key: 2,
        broadcastcontent: "樹屋維修",
        broadcasttime: "13:00~17:00",
        broadcastlocation: "樹屋"
      },
      {
        key: 3,
        broadcastcontent: "樹枝修剪",
        broadcasttime: "14:00~1700",
        broadcastlocation: "全園區"
      },
      {
        key: 4,
        broadcastcontent: "烤肉區無剩餘位子",
        broadcasttime: "11:30",
        broadcastlocation: "烤肉區"
      },
      {
        key: 5,
        broadcastcontent: "步道維修",
        broadcasttime: "10:00~12:00",
        broadcastlocation: "步道"
      }
    ];
    this.currentPage = 1;
    this.newPage = 1;
    this.state = {
      data: this.data
    };
  }
  onEnd = e => {
    const dom = e.target;
    dom.style.height = "auto";
  };

  onDelete = (key, e) => {
    e.preventDefault();
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({ data });
  };

  getBodyWrapper = body => {
    if (this.currentPage !== this.newPage) {
      this.currentPage = this.newPage;
      return body;
    }
    return (
      <TweenOneGroup
        component="tbody"
        className={body.props.className}
        enter={this.enterAnim}
        leave={this.leaveAnim}
        appear={false}
      >
        {body.props.children}
      </TweenOneGroup>
    );
  };

  pageChange = pagination => {
    this.newPage = pagination.current;
  };

  render() {
    return (
      <div>
        <h1>即時訊息</h1>
        <div className={`action-bar`}>
          <Button type="primary">
            <Link to="/dashboard/broadcast/new">新增即時訊息</Link>
          </Button>
        </div>
        <Table
          columns={this.columns}
          pagination={{ pageSize: 7 }}
          dataSource={this.state.data}
          className={`table`}
          getBodyWrapper={this.getBodyWrapper}
          onChange={this.pageChange}
        />
      </div>
    );
  }
}
