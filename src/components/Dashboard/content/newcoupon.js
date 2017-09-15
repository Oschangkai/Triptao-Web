import React from 'react';
import { Icon } from "antd";
import "./newcoupon.css"

    

    export default class Newcoupon extends React.Component {
        render(){
          return(
              
                
              <div> 
                  <button className ="word">< Icon type="rollback"/> 返回優惠券列表</button>
                   <span>                       
                         <center><font size ="5">新增優惠券內容</font></center>                         
                   </span>
                  
                  
                  <span>
                <li className="couponname">
                       優惠券名稱 :  
                       &nbsp;
                       < input type="text" placeholder="      請輸入優惠券名稱" />
                </li>
                 
                  </span>
                <li  className="acceptable">  
                       請勾選可使用店家
                       &nbsp;                       
                </li>     
                        <ul className="grouptitle">- 美洲探險樂園 - </ul>
                        
                            <ul className = "group">
                            <span className="option"><input type="checkbox" /> 急流專賣店</span>
                            <span className="option"><input type="checkbox"/> 擎天輪飯館</span>
                            </ul>
                        
                        <ul className="grouptitle">- 歐洲室內樂園 - </ul>
                        
                            <ul className = "group">
                            <span className="option"><input type="checkbox" /> 童樂堡</span>
                            <span className="option"><input type="checkbox"/> 城堡餐廳</span>
                            <span className="option"><input type="checkbox"/> 小歡龍速食店</span>
                            <span className="option"><input type="checkbox"/> Cafe' WOC風車咖啡屋</span>
                            </ul>

                        <ul className="grouptitle">- 轟浪水樂園 - </ul>
                        
                            <ul className = "group">
                            <span className="option"><input type="checkbox" /> 埃及攝影館</span>
                            <span className="option"><input type="checkbox"/> 埃及館 </span>
                            </ul>
                        
                         <ul className="grouptitle">- 迷你世界 - </ul>
                        
                            <ul className = "group">
                            <span className="option"><input type="checkbox" /> 唐人街 </span>
                            <span className="option"><input type="checkbox"/> 美味樂商品店 </span>
                            <span className="option"><input type="checkbox"/> 鷺山 </span>
                            <span className="option"><input type="checkbox"/> Cafe' WOC</span>
                            <span className="option"><input type="checkbox"/> 蔣府宴 </span>
                            <span className="option"><input type="checkbox"/> 美味樂 </span>
                            </ul>
                        <ul className="grouptitle">- 遊園小火車 - </ul>
                        
                            <ul className = "group">
                            <span className="option"><input type="checkbox" /> 車站商品店</span>
                            </ul>
                    <li className="deadlinetitle">使用期限 :</li>
                        <ul className="deadline">
                            <select id = "year">
                              <option value="0">請選擇年份</option>
                              <option value="1">2017</option>
                              <option value="2">2018</option>
                              <option value="3">2019</option>
                              <option value="4">2020</option>
                              <option value="5">2021</option>
                             </select>
                         年&emsp;
                         <select id = "month">
                          <option value="0">請選擇月份</option>
                          <option value="1">01</option>
                          <option value="2">02</option>
                          <option value="3">03</option>
                          <option value="4">04</option>
                          <option value="5">05</option>
                          <option value="6">06</option>
                          <option value="7">07</option>
                          <option value="8">08</option>
                          <option value="9">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                         </select>
                         月&emsp;
                         <select id = "day">
                          <option value="0">請選擇日期</option>
                          <option value="1">01</option>
                          <option value="2">02</option>
                          <option value="3">03</option>
                          <option value="04">04</option>
                          <option value="05">05</option>
                          <option value="06">06</option>
                          <option value="07">07</option>
                          <option value="08">08</option>
                          <option value="09">09</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                         </select>
                         日截止
                         </ul>


                         <span className = "enter"><button>送出</button></span>


                        
                        
            
                  
              </div>
             
        );
    }
}