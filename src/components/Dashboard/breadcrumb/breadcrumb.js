import React from "react";
import { Route, Switch, Link, withRouter } from 'react-router-dom';

import { Breadcrumb } from "antd";

const breadcrumbNameMap = {
  '/info': '基本資訊',
  '/details': '地區地圖',
  '/activity': '近期活動',
  '/offer/surprise': '驚喜優惠',
  '/offer/game': '闖關活動',
  '/offer/coupon': '優惠券',
  '/broadcast': '即時訊息',
};


const breadcrumbItems = [(
  <Breadcrumb.Item key="home">
    <Link to="/dashboard">Home</Link>
  </Breadcrumb.Item>
)]

export default class AdminBreadcrumb extends React.Component {
  render() {
    return (
      <div></div>
    );
  }
}
