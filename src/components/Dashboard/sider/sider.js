import React from "react";
import { Link } from "react-router-dom";

import { Menu, Icon } from "antd";

import "./sider.css";

const { SubMenu } = Menu;

export default class AdminSider extends React.Component {
  render() {
    return (
      <div>
        <Link to="/dashboard"><div className="logo">我是 Logo</div></Link>
        <Menu theme="light" defaultSelectedKeys={[""]} mode="inline">
          <Menu.Item key="/dashboard/info">
            <Link to="/dashboard/info">
              <Icon type="user" />
              <span>基本資訊</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/details">
            <Link to="/dashboard/details">
              <Icon type="desktop" />
              <span>地區地圖</span>
            </Link>
          </Menu.Item>
          <Menu.Item key="/dashboard/activity">
            <Link to="/dashboard/activity">
              <Icon type="calendar" />
              <span>近期活動</span>
            </Link>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="gift" />
                <span>優惠與遊戲</span>
              </span>
            }
          >
            <Menu.Item key="/dashboard/offer/surprise">
              <Link to="/dashboard/offer/surprise"> 驚喜優惠</Link>
            </Menu.Item>
            <Menu.Item key="/dashboard/offer/game">
              <Link to="/dashboard/offer/game">闖關活動</Link>
            </Menu.Item>
            <Menu.Item key="/dashboard/offer/coupon">
              <Link to="/dashboard/offer/coupon">優惠券</Link>
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="/dashboard/broadcast">
            <Link to="/dashboard/broadcast">
              <Icon type="notification" />
              <span>即時訊息</span>
            </Link>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
