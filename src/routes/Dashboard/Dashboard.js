import React from "react";
import { Route } from "react-router-dom";
import { Button, Layout, Breadcrumb, Icon } from "antd";

import SiderContent from "../../components/Dashboard/sider";
import Breadcrumbs from "../../components/Dashboard/breadcrumb";
import content from "../../components/Dashboard/content";
import newcoupon from "../../components/Dashboard/content/newcoupon"
import game from "../../components/Dashboard/content/game"

const { Header, Content, Footer, Sider } = Layout;

export default class Dashboard extends React.Component {
  state = {
    collapsed: false
  };
  toggleSideBar = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          breakpoint="md"
          collapsed={this.state.collapsed}
          trigger={null}
          style={{ background: "#fff" }}
        >
          <SiderContent />
        </Sider>
        <Layout>
          <Header
            style={{
              background: "#fff",
              padding: "0 2% 0 2%",
              justifyContent: "space-between"
            }}
          >
            <Button
              shape="circle"
              className="trigger"
              onClick={this.toggleSideBar}
            >
              <Icon
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                style={{ fontSize: 16, textAlign: "center" }}
              />
            </Button>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "12px 0" }}>{ Breadcrumbs }</Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Route path="/dashboard/info" component={content} />
              <Route path="/dashboard/details" component={content} />
              <Route path="/dashboard/activity" component={content} />
              <Route path="/dashboard/offer/coupon" component={newcoupon} />
              <Route path="/dashboard/offer/surprise" component={content} />
              <Route path="/dashboard/offer/game" component={game} />              
              <Route path="/dashboard/broadcast" component={content} />
              <Route render={() => <span></span>} />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Triptao ©2017 Created by Triptao Group
          </Footer>
        </Layout>
      </Layout>
    );
  }
}
