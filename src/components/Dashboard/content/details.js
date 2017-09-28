import React from "react";
import Table from "antd/lib/table";
import Button from "antd/lib/button";
import PropTypes from "prop-types";
import { TweenOneGroup } from "rc-tween-one";
import { Link } from "react-router-dom";
import Map from "../map";
import "./details.css";

export default class details extends React.Component {
  static propTypes = {
    className: PropTypes.string
  };

  static defaultProps = {
    className: "table-enter-leave-demo"
  };

  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "地標資訊名稱",
        dataIndex: "detailsname",
        key: "detailsname"
      },
      { title: "地標資訊類型", dataIndex: "detailstype", key: "detailstype" },
      {
        title: "地標資訊經緯度",
        dataIndex: "detailslocation",
        key: "detailslocation"
      },
      {
        title: "地標資訊經緯度",
        dataIndex: "detailslocation",
        key: "detailslocation"
      },
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

    this.data = [
      {
        key: 1,
        detailsname: "豪雨特報",
        detailstype: "14:00~16:00",
        detailslocation: "全園區"
      },
      {
        key: 2,
        detailsname: "本殿有毒蛇出沒",
        detailstype: "17:00",
        detailslocation: "本殿"
      },
      {
        key: 3,
        detailsname: "東司化妝室維修",
        detailstype: "11:00~1300",
        detailslocation: "東司"
      },
      {
        key: 4,
        detailsname: "突有落石",
        detailstype: "14:00",
        detailslocation: "枅垣與透塀"
      },
      {
        key: 5,
        detailsname: "社務所展覽",
        detailstype: "13:00~1700  ",
        detailslocation: "社務所"
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
        <div className={`${this.props.className}-action-bar`}>
          <Button type="primary">
            <Link to="/dashboard/details/new">新增地標資訊</Link>
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
        <center>
          <Map width="500" height="500" loc={input => this.getLoc(input)} />
        </center>
      </div>
    );
  }
}
