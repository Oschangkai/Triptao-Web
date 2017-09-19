import React from "react";
import { Link } from "react-router-dom";

import { Breadcrumb } from "antd";

const AdminBreadcrumb = props => {
  const { location } = props;

  const breadcrumbNameMap = {
    "/dashboard": "首頁",
    "/dashboard/info": "基本資訊",
    "/dashboard/details": "地區地圖",
    "/dashboard/details/new": "新增",
    "/dashboard/activity": "近期活動",
    "/dashboard/activity/new": "新增",
    "/dashboard/offer": "優惠與遊戲",
    "/dashboard/offer/surprise": "驚喜優惠",
    "/dashboard/offer/surprise/new": "新增",
    "/dashboard/offer/game": "闖關活動",
    "/dashboard/offer/game/new": "新增",
    "/dashboard/offer/coupon": "優惠券",
    "/dashboard/offer/coupon/new": "新增",
    "/dashboard/broadcast": "即時訊息",
    "/dashboard/broadcast/new": "新增"
  };

  const pathSnippets = location.pathname.split("/").filter(i => i);
  const extraItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </Breadcrumb.Item>
    );
  });

  const breadcrumbItems = [].concat(extraItems);

  return breadcrumbItems;
};
export default AdminBreadcrumb;
