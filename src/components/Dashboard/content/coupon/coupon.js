import React from "react";
import Table from "antd/lib/table";
import Button from "antd/lib/button";
import PropTypes from "prop-types";
import { TweenOneGroup } from "rc-tween-one";
import { Link } from "react-router-dom";

export default class coupon extends React.Component {
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
        title: "優惠券內容",
        dataIndex: "couponcontent",
        key: "couponcontent"
      },
      { title: "可使用店家", dataIndex: "couponstore", key: "couponstore" },
      {
        title: "截止日期",
        dataIndex: "coupondeadline",
        key: "coupondeadline"
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
        couponcontent: "搭乘公車半價優惠",
        couponstore: "其他",
        coupondeadline: "2018/12/31"
      },
      {
        key: 2,
        couponcontent: "味全埔心牧場門票九折",
        couponstore: "味全埔心牧場",
        coupondeadline: "2018/3/31"
      },
      {
        key: 3,
        couponcontent: "特約商店九折",
        couponstore: "其他",
        coupondeadline: "2018/12/31"
      },
      {
        key: 4,
        couponcontent: "市民卡紅利點數加倍送",
        couponstore: "其他",
        coupondeadline: "2017/11/30"
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
            <Link to="/dashboard/">新增優惠券</Link>
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
