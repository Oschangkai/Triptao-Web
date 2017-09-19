import React from "react";
import { Icon, Input, Checkbox, DatePicker } from "antd";
import { Link } from "react-router-dom";

import Button from "antd/lib/button";
import "./newcoupon.css";

export default class Newcoupon extends React.Component {
  render() {
    return (
      <div>
        <Link to="/dashboard/offer/coupon">
          <span className="back">
            <Icon type="rollback" />返回優惠券列表{" "}
          </span>
        </Link>

        <span>
          <li className="couponname">
            優惠券名稱 : &nbsp;
            <input type="text" placeholder="      請輸入優惠券名稱" />
          </li>
        </span>
        <li className="acceptable">請勾選可使用店家 &nbsp;</li>
        <ul className="grouptitle">- 美洲探險樂園 - </ul>

        <ul className="group">
          <span className="option">
            <Checkbox> 急流專賣店</Checkbox>
          </span>
          <span className="option">
            <Checkbox> 擎天輪飯館</Checkbox>
          </span>
        </ul>

        <ul className="grouptitle">- 歐洲室內樂園 - </ul>

        <ul className="group">
          <span className="option">
            <Checkbox> 童樂堡</Checkbox>
          </span>
          <span className="option">
            <Checkbox> 城堡餐廳</Checkbox>
          </span>
          <span className="option">
            <Checkbox> 小歡龍速食店</Checkbox>
          </span>
          <span className="option">
            <Checkbox> Cafe' WOC風車咖啡屋</Checkbox>
          </span>
        </ul>

        <ul className="grouptitle">- 轟浪水樂園 - </ul>

        <ul className="group">
          <span className="option">
            <Checkbox> 埃及攝影館</Checkbox>
          </span>
          <span className="option">
            <Checkbox>埃及館 </Checkbox>
          </span>
        </ul>

        <ul className="grouptitle">- 迷你世界 - </ul>

        <ul className="group">
          <span className="option">
            <Checkbox> 唐人街 </Checkbox>
          </span>
          <span className="option">
            <Checkbox>美味樂商品店 </Checkbox>
          </span>
          <span className="option">
            <Checkbox>鷺山 </Checkbox>
          </span>
          <span className="option">
            <Checkbox>Cafe' WOC</Checkbox>
          </span>
          <span className="option">
            <Checkbox>蔣府宴 </Checkbox>
          </span>
          <span className="option">
            <Checkbox>美味樂 </Checkbox>
          </span>
        </ul>
        <ul className="grouptitle">- 遊園小火車 - </ul>

        <ul className="group">
          <span className="option">
            <Checkbox> 車站商品店</Checkbox>
          </span>
        </ul>
        <li className="deadlinetitle">截止日期 :</li>

        <span className="deadline">
          <DatePicker placeholder="請選擇日期" />
        </span>

        <span className="addcoupon">
          <center>
            <Icon type="plus-circle-o" /> 新增{" "}
          </center>
        </span>
      </div>
    );
  }
}
