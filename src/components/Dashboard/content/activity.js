import React from "react";
import Table from "antd/lib/table";
import Button from "antd/lib/button";
import PropTypes from "prop-types";
import { TweenOneGroup } from "rc-tween-one";
import { Link } from "react-router-dom";
import "./activity.css";

export default class activity extends React.Component {
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
        title: "活動名稱",
        dataIndex: "activityname",
        key: "activityname"
      },
      { title: "活動時間", dataIndex: "activitytime", key: "activitytime" },

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
        activityname: "桃園忠烈祠暨神社文化園區仲夏祝福祭",
        activitytime: "2017/8/20"
      },
      {
        key: 2,
        activityname: "祭孔習儀",
        activitytime: "2017/9/24"
      },
      {
        key: 3,
        activityname: "釋奠典禮",
        activitytime: "2017/9/28"
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
            <Link to="/dashboard/activity/new">新增活動資訊</Link>
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
