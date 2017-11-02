import React from "react";
import { Button, Table } from "antd";
import { Link } from "react-router-dom";
import { TweenOneGroup } from "rc-tween-one";
import "../table.less";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "活動名稱",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "活動時間",
        dataIndex: "time",
        key: "time"
      },
      {
        title: "刪除",
        dataIndex: "",
        key: "x",
        render: (text, record) => (
          <span className="delete" onClick={e => this.onDelete(record.key, e)}>
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
        name: "from",
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
        name: "桃園忠烈祠暨神社文化園區仲夏祝福祭",
        time: "2017.8.20"
      },
      {
        key: 2,
        name: "祭孔習儀",
        time: "2017/9/24"
      },
      {
        key: 3,
        name: "釋奠典禮",
        time: "2017/9/28"
      }
    ];

    this.state = {
      data: this.data
    };
  }

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

  render() {
    return (
      <div>
        <h1>近期活動</h1>
        <div className={`action-bar`}>
          <Button type="primary" className="button">
            <Link to="/dashboard/"> 新增活動資訊</Link>
          </Button>
        </div>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          className={`table`}
          getBodyWrapper={this.getBodyWrapper}
        />
      </div>
    );
  }
}
