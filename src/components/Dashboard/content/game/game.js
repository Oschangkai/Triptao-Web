import React from "react";
import { Button, Table } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import { Link } from "react-router-dom";
import "../table.less";

export default class game extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      { title: "關卡名稱", dataIndex: "gamename", key: "gamename" },
      { title: "關卡內容", dataIndex: "gamecontent", key: "gamecontent" },
      { title: "通關獎勵", dataIndex: "gameprize", key: "gameprize" },
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
    this.leaveAnimchildren = [
      { duration: 250, opacity: 0 },
      { height: 0, duration: 200, ease: "easeOutQuad" }
    ];

    this.data = [
      {
        key: 1,
        gamename: "壯士之旅",
        gamecontent: "鳥居，高麗犬，銅馬，拜殿",
        gameprize: "特約商店九折"
      },
      {
        key: 2,
        gamename: "回到過去",
        gamecontent: "石燈籠，手水舍，社務所",
        gameprize: "市民卡紅利點數加倍送"
      },
      {
        key: 3,
        gamename: "初訪忠烈祠",
        gamecontent: "石燈籠，鳥居，本殿",
        gameprize: "搭乘公車半價優惠"
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
        <div className={`action-bar`}>
          <Button type="primary">
            <Link to="/dashboard/offer/game/new">新增闖關活動</Link>
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
