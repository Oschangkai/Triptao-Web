import React from "react";
import { Button, Table, Spin } from "antd";
import { TweenOneGroup } from "rc-tween-one";
import { Link } from "react-router-dom";
import "../table.less";

export default class surprise extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "驚喜優惠名稱",
        dataIndex: "surprisename",
        key: "surprisename"
      },
      {
        title: "驚喜優惠設置處",
        dataIndex: "surpriselocation",
        key: "surpriselocation"
      },
      {
        title: "驚喜優惠獎勵",
        dataIndex: "surpriseprize",
        key: "surpriseprize"
      },
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
    this.leaveAnim = [
      { duration: 250, opacity: 0 },
      { height: 0, duration: 200, ease: "easeOutQuad" }
    ];

    this.data = [
      {
        key: 1,
        surprisename: "史前巨大的恐龍",
        surpriselocation: "恐龍雕像",
        surpriseprize: "厭世恐龍模型買二送一，買三送二"
      },
      {
        key: 2,
        surprisename: "博學多聞的貓頭鷹",
        surpriselocation: "貓頭鷹福寶",
        surpriseprize: "免費兌換福寶明信片"
      }
    ];
    this.currentPage = 1;
    this.newPage = 1;
    this.state = {
      data: this.data,
      loading: true
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

  componentDidMount() {
    this.setState({
      loading: false
    });
  }

  render() {
    return (
      <Spin spinning={this.state.loading}>
        <h1>驚喜優惠</h1>
        <div className={`action-bar`}>
          <Button type="primary">
            <Link to="/dashboard/offer/surprise/new">新增驚喜優惠</Link>
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
      </Spin>
    );
  }
}
