import React from "react";
import { Radio, Input, Switch, Tooltip, Avatar } from "antd";
import "./info.css";

const RadioGroup = Radio.Group;
const { TextArea } = Input;

let none = "1";
let temp = none;

let username = "名稱 : ";
let useraddress = "地址 : ";
let userbusinesshour = "時間 : ";
let userintroduction = "介紹 : ";

let tempusername = username;
let tempuseraddress = useraddress;
let tempuserbusinesshour = userbusinesshour;
let tempintroduction = userintroduction;

let defaultnameplaceholder = "請輸入名稱";
let defaultaddressplaceholder = "請輸入地址";
let defaulttelephoneplaceholder = "請輸入電話";
let defaultbusinesshourplaceholder = "請輸入時間";
let defaultintroductionplaceholder = "請輸入簡介";

let mainnameplaceholder = "奧爾森林學堂";
let mainaddressplaceholder = "桃園市桃園區公園路42號";
let maintelephoneplaceholder = "3946061";
let mainbusinesshourplaceholder = "08：00~17：00";
let mainintroductionplaceholder =
  "「奧爾森林學堂」位於素有「桃園後花園」美譽的虎頭山公園內，在2012年以不破壞公園內景觀及樹木為原則下，在林木間搭起木製空中步道，同時利用雀榕善於纏繞的特性讓樹木與樹屋共生，打造出充滿生命力的三座「活」樹屋，並以大大小小的貓頭鷹裝飾其中，命名為「奧爾森林學堂」。其中有設計六角形的「讀樹教室」，可近距離觀察樹木生長的生態；從貓頭鷹造型的「咕咕屋」則可窺見鳥類生態；至於船型的「綠野方舟」則是孩子們最佳表演平台，待再久都不厭煩。";

let tempnameplaceholder = defaultnameplaceholder;
let tempaddressplaceholder = defaultaddressplaceholder;
let temptelephoneplaceholder = defaulttelephoneplaceholder;
let tempbusinesshourplaceholder = defaultbusinesshourplaceholder;
let tempintroductionplaceholder = defaultintroductionplaceholder;

export default class info extends React.Component {
  state = {
    value: 0
  };

  onchangeswitch(checked) {
    console.log(`switch to ${checked}`);

    temp = maintelephoneplaceholder;
  }

  onchangeradio = e => {
    console.log("radio checked", e.target.value);
    this.setState({
      value: e.target.value
    });

    if (e.target.value === 1 || e.target.value === 2) {
      tempusername = "商家" + username;
      tempuseraddress = "商家" + useraddress;
      tempuserbusinesshour = "營業" + userbusinesshour;
      tempintroduction = "商家" + userintroduction;
    } else if (e.target.value === 3) {
      tempusername = "景點" + username;
      tempuseraddress = "景點" + useraddress;
      tempuserbusinesshour = "開放" + userbusinesshour;
      tempintroduction = "景點" + userintroduction;
    } else if (e.target.value === 4) {
      tempusername = "園區" + username;
      tempuseraddress = "園區" + useraddress;
      tempuserbusinesshour = "營業" + userbusinesshour;
      tempintroduction = "園區" + userintroduction;
    } else if (e.target.value === 5) {
      tempusername = "展區" + username;
      tempuseraddress = "展區" + useraddress;
      tempuserbusinesshour = "開放" + userbusinesshour;
      tempintroduction = "展區" + userintroduction;
    }

    if (e.target.value === 3) {
      tempnameplaceholder = mainnameplaceholder;
      tempaddressplaceholder = mainaddressplaceholder;
      temptelephoneplaceholder = maintelephoneplaceholder;
      tempbusinesshourplaceholder = mainbusinesshourplaceholder;
      tempintroductionplaceholder = mainintroductionplaceholder;
    } else {
      tempnameplaceholder = defaultnameplaceholder;
      tempaddressplaceholder = defaultaddressplaceholder;
      temptelephoneplaceholder = defaulttelephoneplaceholder;
      tempbusinesshourplaceholder = defaultbusinesshourplaceholder;
      tempintroductionplaceholder = defaultintroductionplaceholder;
    }
  };

  render() {
    return (
      <div>
        <li className="radiobuttontitle">
          使用者分類 :
          <RadioGroup
            className="radiobutton"
            onChange={this.onchangeradio}
            value={this.state.value}
          >
            <Radio value={1} className="radiobutton">
              美食
            </Radio>
            <Radio value={2} className="radiobutton">
              購物
            </Radio>
            <Radio value={3} className="radiobutton">
              景點
            </Radio>
            <Radio value={4} className="radiobutton">
              園區
            </Radio>
            <Radio value={5} className="radiobutton">
              展區活動
            </Radio>
          </RadioGroup>
        </li>
        <li className="inputtitle">
          {tempusername}
          <input
            type="text"
            placeholder={tempnameplaceholder}
            className="input"
          />
          <span className="switch">
            <Tooltip placement="right" title="使用預設值" arrowPointAtCenter>
              <Switch defaultChecked={false} onChange={this.onchangeswitch} />
            </Tooltip>
          </span>
        </li>

        <li className="inputtitle">
          {tempuseraddress}
          <input
            type="text"
            placeholder={tempaddressplaceholder}
            className="input"
          />
          <span className="switch">
            <Tooltip placement="right" title="使用預設值" arrowPointAtCenter>
              <Switch defaultChecked={false} onChange={this.onchangeswitch} />
            </Tooltip>
          </span>
        </li>

        <li className="inputtitle">
          聯絡電話 :
          <input
            type="text"
            placeholder={temptelephoneplaceholder}
            className="input"
          />
          <span className="switch">
            <Tooltip placement="right" title="使用預設值" arrowPointAtCenter>
              <Switch defaultChecked={false} onChange={this.onchangeswitch} />
            </Tooltip>
          </span>
        </li>

        <li className="inputtitle">
          {tempuserbusinesshour}
          <input
            type="text"
            placeholder={tempbusinesshourplaceholder}
            className="input"
          />
          <span className="switch">
            <Tooltip placement="right" title="使用預設值" arrowPointAtCenter>
              <Switch defaultChecked={false} onChange={this.onchangeswitch} />
            </Tooltip>
          </span>
        </li>
        <li className="inputtitle">
          {tempintroduction}
          <span className="switch">
            <Tooltip placement="right" title="使用預設值" arrowPointAtCenter>
              <Switch defaultChecked={false} onChange={this.onchangeswitch} />
            </Tooltip>
          </span>
          <TextArea rows={5} placeholder={tempintroductionplaceholder} />
        </li>
      </div>
    );
  }
}
