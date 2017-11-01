import React from "react";
import { Menu, Layout, Breadcrumb, Icon } from "antd";

import SiderContent from "../../components/Dashboard/sider";
import Breadcrumbs from "../../components/Dashboard/breadcrumb";
import Contents from "../../components/Dashboard/content";

import "./Dashboard.less";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  };
  render() {
    return (
      <Layout>
        <Sider
          breakpoint="md"
          collapsible
          className="sider"
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <SiderContent />
        </Sider>
        <Layout
          className="right"
          style={
            this.state.collapsed ? { marginLeft: 64 } : { marginLeft: 200 }
          }
        >
          <Header
            className="header"
            style={
              this.state.collapsed
                ? { width: "calc(100% - 64px)" }
                : { width: "calc(100% - 200px)" }
            }
          >
            <Menu
              className="header-menu"
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <SubMenu
                title={
                  <span>
                    <Icon type="user" />忠烈祠
                  </span>
                }
              >
                <Menu.Item key="setting">
                  <Icon type="setting" />設定
                </Menu.Item>
                <Menu.Item key="logout">
                  <Icon type="logout" />登出
                </Menu.Item>
              </SubMenu>
            </Menu>
          </Header>
          <Content style={{ paddingTop: 64, margin: "0 30px" }}>
            <Breadcrumb style={{ margin: "12px 0" }}>
              {Breadcrumbs(this.props)}
            </Breadcrumb>
            <div className="content">
              <Contents />
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
