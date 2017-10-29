import React from "react";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import { TweenOneGroup } from "rc-tween-one";
import Map from "../../map";
import "../details.css";

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
        title: "經,緯度",
        dataIndex: "location",
        key: "location"
      },
      {
        title: "刪除",
        dataIndex: "",
        key: "x",
        render: (text, record) => (
          <span
            className="table-enter-leave-demo-delete"
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
        type: "地標",
        name: "銅馬",
        time: "09:00 ~ 17:00",
        limit: "請勿惡意損毀",
        location: "121.3251495,25.0060863"
      },
      {
        key: 2,
        type: "設施",
        name: "拜殿",
        time: "09:00 ~ 17:00",
        limit: "周圍草皮維護中，請勿隨意踐踏",
        location: "121.3253326,25.0063972"
      },
      {
        key: 3,
        type: "地標",
        name: "高麗犬",
        time: "09:00 ~ 17:00",
        limit: "請勿惡意損毀",
        location: "121.3251877,25.0063229"
      },
      {
        key: 4,
        type: "地標",
        name: "鳥居",
        time: "09:00 ~ 17:00",
        limit: "無",
        location: "121.3250198,25.0060501"
      }
    ];

    this.state = {
      data: this.data
    };
  }
  positions = [
    { lat: 25.0063972, lng: 121.3253326 },
    { lat: 25.0063229, lng: 121.3251877 },
    { lat: 25.0060501, lng: 121.3250198 }
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

  getLoc = loc => {
    this.setState({
      lat: loc.lat,
      lng: loc.lng
    });
    console.log(loc);
  };

  render() {
    return (
      <div>
        <Button type="primary" className="button">
          <Link to="details/new">新增地標資訊</Link>
        </Button>
        <Table
          columns={this.columns}
          dataSource={this.state.data}
          className="table"
          getBodyWrapper={this.getBodyWrapper}
        />
        <center>
          <Map positions={this.positions} />
        </center>
      </div>
    );
  }
}
