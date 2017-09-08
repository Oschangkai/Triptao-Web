import React from "react";

import { Menu, Icon } from "antd";

import "./sider.css";

const { SubMenu } = Menu;

const AdminSider = () => (
  <div>
    <div className="logo">我是 Logo</div>
    <Menu theme="light" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1">
        <Icon type="user" />
        <span>基本資訊</span>
      </Menu.Item>
      <Menu.Item key="2">
        <Icon type="desktop" />
        <span>地區地圖</span>
      </Menu.Item>
      <Menu.Item key="3">
        <Icon type="calendar" />
        <span>近期活動</span>
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
        <Menu.Item key="4">驚喜優惠</Menu.Item>
        <Menu.Item key="5">闖關活動</Menu.Item>
        <Menu.Item key="6">優惠券</Menu.Item>
      </SubMenu>
      <Menu.Item key="7">
        <Icon type="notification" />
        <span>即時訊息</span>
      </Menu.Item>
    </Menu>
  </div>
);

export default AdminSider;
