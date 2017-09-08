import React from "react";
import { Button, Layout, Breadcrumb, Icon } from "antd";
import SiderContent from "../../components/Dashboard/sider";

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
            <Breadcrumb style={{ margin: "12px 0" }}>
              <Breadcrumb.Item href="">
                <Icon type="home" />
              </Breadcrumb.Item>
              <Breadcrumb.Item>優惠與遊戲</Breadcrumb.Item>
              <Breadcrumb.Item>優惠券</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              這裡是內容
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
