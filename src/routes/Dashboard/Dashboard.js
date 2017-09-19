import React from "react";
import { Route, Switch } from "react-router-dom";
import { Menu, Layout, Breadcrumb, Icon } from "antd";

import SiderContent from "../../components/Dashboard/sider";
import Breadcrumbs from "../../components/Dashboard/breadcrumb";
import content from "../../components/Dashboard/content";
import newcoupon from "../../components/Dashboard/content/newcoupon"
import game from "../../components/Dashboard/content/game"
import newgame from "../../components/Dashboard/content/newgame"

import "./Dashboard.less";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

export default class Dashboard extends React.Component {
  state = {};

  render() {
    return (
      <Layout>
        <Sider breakpoint="md" collapsible style={{ background: "#fff" }}>
          <SiderContent collapsed={this.collapsed} />
        </Sider>
        <Layout>
          <Header>
            <Menu
              className="header-menu"
              selectedKeys={[this.state.current]}
              mode="horizontal"
            >
              <SubMenu
                title={
                  <span>
                    <Icon type="user" />小人國
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
          <Content style={{ margin: "0 16px" }}>
            <Breadcrumb style={{ margin: "12px 0" }}>
              {Breadcrumbs(this.props)}
            </Breadcrumb>
            <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
              <Switch>
                <Route exact path="/dashboard/info" component={content} />
                <Route exact path="/dashboard/details" component={content} />
                <Route exact path="/dashboard/activity" component={content} />
                <Route
                  exact
                  path="/dashboard/offer/surprise"
                  component={content}
                />
                <Route
                  exact
                  path="/dashboard/offer/coupon"
                  component={newcoupon}
                />
                <Route exact path="/dashboard/offer/game" component={game} />
                <Route exact path="/dashboard/broadcast" component={newgame} />
                <Route render={() => <span>Hi</span>} />
              </Switch>
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
