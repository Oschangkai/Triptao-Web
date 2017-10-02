import React from "react";
import { Table, Button } from "antd";
import { Link } from "react-router-dom";
import Map from "../map";
import "./details.css";

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

    this.data = [
      {
        key: 1,
        type: "地標",
        name: "拜殿",
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

  onDelete = (key, e) => {
    e.preventDefault();
    const data = this.state.data.filter(item => item.key !== key);
    this.setState({ data });
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
          <Link to="details/new"> 新增地標資訊</Link>
        </Button>
        <Table
          columns={this.columns}
          dataSource={this.data}
          className="table"
        />
        <center>
          <Map width="500" height="500" loc={input => this.getLoc(input)} />
        </center>
      </div>
    );
  }
}
