import React from "react";
import { Link } from "react-router-dom";

import { Breadcrumb } from "antd";

const AdminBreadcrumb = props => {
  const { location } = props;

  const breadcrumbNameMap = {
    "/dashboard": "首頁",
    "/dashboard/info": "基本資訊",
    "/dashboard/details": "地區地圖",
    "/dashboard/activity": "近期活動",
    "/dashboard/offer": "優惠與遊戲",
    "/dashboard/offer/surprise": "驚喜優惠",
    "/dashboard/offer/game": "闖關活動",
    "/dashboard/offer/coupon": "優惠券",
    "/dashboard/broadcast": "即時訊息"
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
