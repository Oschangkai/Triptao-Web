import React from "react";
import { Button, Table, Spin } from "antd";
import { Link } from "react-router-dom";
import { TweenOneGroup } from "rc-tween-one";
import Map from "../../map";
import "../table.less";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "地標類別",
        dataIndex: "type",
        key: "type"
      },
      {
        title: "名稱",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "營業/開放時間",
        dataIndex: "time",
        key: "time"
      },
      {
        title: "特殊限制",
        dataIndex: "limit",
        key: "limit"
      },
      {
        title: "緯度 / 經度",
        dataIndex: "location",
        key: "location"
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
        type: "設施",
        name: "溜滑梯",
        time: "08：00~17：00",
        limit: "小孩遊玩時需有成年人陪同",
        location: "25.0022298 / 121.3277102"
      },
      {
        key: 2,
        type: "地標",
        name: "恐龍雕像",
        time: "08：00~17：00",
        limit: "周圍草皮維護中，請勿隨意踐踏",
        location: "25.0018403 / 121.3277587"
      },
      {
        key: 3,
        type: "地標",
        name: "貓頭鷹福寶",
        time: "08：00~17：00",
        limit: "請勿惡意損毀",
        location: "25.0020623 / 121.3276226"
      }
    ];

    this.state = {
      data: this.data,
      loading: true
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  positions = [
    { lat: 25.0022298, lng: 121.3277102 },
    { lat: 25.0018403, lng: 121.3277587 },
    { lat: 25.0020623, lng: 121.3276226 }
  ];

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
      <Spin spinning={this.state.loading}>
        <h1>地區地圖</h1>
        <div className={`action-bar`}>
          <Button type="primary" className="button">
            <Link to="/dashboard/details/new">新增地標資訊</Link>
          </Button>
        </div>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          className="table"
          getBodyWrapper={this.getBodyWrapper}
        />
        <center>
          <Map positions={this.positions} />
        </center>
      </Spin>
    );
  }
}
