import React from "react";
import { Button, Table, Spin } from "antd";
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
        name: "惡搞恐龍趣味照片，打卡上傳活動",
        time: "2017.12.20"
      },
      {
        key: 2,
        name: "重陽節健行登山活動",
        time: "2017.10.28"
      }
    ];

    this.state = {
      data: this.data,
      loading: true
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
  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    return (
      <Spin spinning={this.state.loading}>
        <h1>近期活動</h1>
        <div className={`action-bar`}>
          <Button type="primary" className="button">
            <Link to="/dashboard/activity/new"> 新增活動資訊</Link>
          </Button>
        </div>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          className={`table`}
          getBodyWrapper={this.getBodyWrapper}
        />
      </Spin>
    );
  }
}
