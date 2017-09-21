import React from "react";
import { Icon } from "antd";
import Table from "antd/lib/table";
import Button from "antd/lib/button";
import QueueAnim from "rc-queue-anim";
import PropTypes from "prop-types";
import { TweenOneGroup } from "rc-tween-one";
import { Link, Route, Switch } from "react-router-dom";
import "./game.css";

export default class game extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: "table-enter-leave-demo"
  };

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
            className={`${this.props.className}-delete`}
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

    let a = this.props.cheatdata;
    if (a == 1) {
      this.data = [
        {
          key: 1,
          gamename: "了解故鄉之旅",
          gamecontent: "迷你台灣、迷你亞洲",
          gameprize: "歡迎蒞臨小人國"
        },
        {
          key: 2,
          gamename: "g7",
          gamecontent: "h7",
          gameprize: "I7"
        },
        {
          key: 3,
          gamename: "d7",
          gamecontent: "e7",
          gameprize: "f7"
        },
        {
          key: 4,
          gamename: "a7",
          gamecontent: "b7",
          gameprize: "c7"
        }
      ];
      this.currentPage = 1;
      this.newPage = 1;
      this.state = {
        data: this.data
      };
    } else {
      this.data = [
        {
          key: 1,
          gamename: "87boy",
          gamecontent: "a",
          gameprize: "a"
        }
      ];
      this.currentPage = 1;
      this.newPage = 1;
      this.state = {
        data: this.data
      };
    }
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
        <div className={this.props.className}>
          <ul>
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>

        <div className={`${this.props.className}-list`}>
          <QueueAnim type="bottom" component="ul">
            <li key="0" />
            <li key="1" />
            <li key="2" />
            <li key="3" />
            <li key="4" />
          </QueueAnim>
        </div>

        <div className={`${this.props.className}-action-bar`}>
          <Button type="primary">
            <Link to="/dashboard/offer/game/new">新增闖關活動</Link>
          </Button>
        </div>
        <Table
          columns={this.columns}
          pagination={{ pageSize: 7 }}
          dataSource={this.state.data}
          className={`${this.props.className}-table`}
          getBodyWrapper={this.getBodyWrapper}
          onChange={this.pageChange}
        />
      </div>
    );
  }
}
document.getElementById("newgame");
