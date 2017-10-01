import React from "react";
import { Route, Switch } from "react-router-dom";
import { Menu, Layout, Breadcrumb, Icon } from "antd";

import SiderContent from "../../components/Dashboard/sider";
import Breadcrumbs from "../../components/Dashboard/breadcrumb";
import content from "../../components/Dashboard/content";
import info from "../../components/Dashboard/content/info";
import details from "../../components/Dashboard/content/details";
import newDetails from "../../components/Dashboard/content/newDetails";
import activity from "../../components/Dashboard/content/activity";
import surprise from "../../components/Dashboard/content/surprise";
import game from "../../components/Dashboard/content/game";
import newgame from "../../components/Dashboard/content/newgame";
import coupon from "../../components/Dashboard/content/coupon";
import newcoupon from "../../components/Dashboard/content/newcoupon";
import broadcast from "../../components/Dashboard/content/broadcast";


import "./Dashboard.less";

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;
<details sayhey="hey"/>
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
          <Content style={{ margin: "0 30px" }}>
            <Breadcrumb style={{ margin: "12px 0" }}>
              {Breadcrumbs(this.props)}
            </Breadcrumb>
            <div className="content">
              <Switch>
                <Route exact path="/dashboard/info" component={info} />
                <Route exact path="/dashboard/details" component={details} />
                <Route
                  exact
                  path="/dashboard/details/new"
                  component={newDetails}
                />
                <Route exact path="/dashboard/activity" component={activity} />
                <Route
                  exact
                  path="/dashboard/activity/new"
                  component={content}
                />
                <Route
                  exact
                  path="/dashboard/offer/surprise"
                  component={surprise}
                />
                <Route
                  exact
                  path="/dashboard/offer/surprise/new"
                  component={content}
                />
                <Route
                  exact
                  path="/dashboard/offer/coupon"
                  component={coupon}
                />
                <Route
                  exact
                  path="/dashboard/offer/coupon/new"
                  component={newcoupon}
                />
                <Route exact path="/dashboard/offer/game" component={game} />
                <Route
                  exact
                  path="/dashboard/offer/game/new"
                  component={newgame}
                />
                <Route
                  exact
                  path="/dashboard/broadcast"
                  component={broadcast}
                />
                <Route
                  exact
                  path="/dashboard/broadcast/new"
                  component={content}
                />
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
