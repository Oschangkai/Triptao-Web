import React from "react";
import { Button, Radio, Input, Form, Avatar, Modal } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 3 },
    xl: { span: 2 }
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
    xl: { span: 14 }
  }
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 3,
      offset: 21
    },
    sm: {
      span: 2,
      offset: 17
    },
    lg: {
      span: 1,
      offset: 18
    },
    xl: {
      span: 1,
      offset: 15
    }
  }
};

const placehoders = {
  name: "請輸入名稱",
  address: "請輸入地址",
  tel: "請輸入電話",
  businessHour: "請輸入時間",
  admission: "請輸入票價",
  intro: "請輸入簡介",
  website: "請輸入官方網站網址"
};

const val = {
  name: "桃園忠烈祠暨神社文化園區",
  address: "桃園市桃園區成功路三段200號",
  tel: "03-3325215",
  businessHour: " 週一至週日09:00~17:00",
  admission: "免費",
  intro:
    "座落於桃園市虎頭山上的桃園市忠烈祠，落成於民國二十七年，前身為日本人所建造的「桃園神社」，是臺灣保存最為完整的日治時代神社，建築風格融合了中國古代唐風、日本風及臺灣近代風，採用上等台灣檜木構築，並已在民國八十三年經公告正式被列為國家三級古蹟；也因為特殊的歷史文化價值，而被電影《KANO》選中成為拍片場景，引領觀眾深刻感受1930年代的歲月回憶。",
  website: "http://www.tycg.gov.tw/confucius/index.jsp"
};

const category = {
  restaurant: "美食",
  mall: "購物",
  spot: "景點",
  park: "園區",
  exhibition: "展區活動"
};
const categoryRadio = Object.entries(category).map(el => {
  return (
    <Radio key={el[0]} value={el[1]}>
      {el[1]}
    </Radio>
  );
});

function success() {
  Modal.success({
    title: "儲存成功",
    okText: "確認"
  });
}

export default class info extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catagory: "園區",
      disabled: true,
      ...val
    };
  }

  onInputChanged = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  catagoryOnChanged = e => {
    this.setState({
      catagory: e.target.value
    });
  };
  render() {
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          style={{ paddingTop: 10, paddingLeft: 10 }}
        >
          <h1>基本資訊</h1>
        </FormItem>

        <FormItem {...formItemLayout} label="用戶商標">
          <Avatar size="large" src="https://i.imgur.com/jvRgWB3.jpg" />
        </FormItem>
        <FormItem {...formItemLayout} label="AR寶寶">
          <Link to="./AR">AR</Link>
        </FormItem>

        <FormItem {...formItemLayout} label="園區名稱">
          <Input
            type="text"
            id="name"
            placeholder={placehoders.name}
            value={this.state.name}
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...formItemLayout} label="園區分類">
          <RadioGroup
            id="category"
            onChange={this.catagoryOnChanged}
            value={this.state.catagory}
            disabled={this.state.disabled}
          >
            {categoryRadio}
          </RadioGroup>
        </FormItem>

        <FormItem {...formItemLayout} label="園區地址">
          <Input
            type="text"
            id="address"
            placeholder={placehoders.address}
            value={this.state.address}
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...formItemLayout} label="聯絡電話">
          <Input
            type="text"
            id="tel"
            placeholder={placehoders.tel}
            value={this.state.tel}
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...formItemLayout} label="開放時間">
          <Input
            type="text"
            id="businessHour"
            placeholder={placehoders.businessHour}
            value={this.state.businessHour}
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...formItemLayout} label="門票資訊">
          <Input
            type="text"
            id="admission"
            placeholder={placehoders.admission}
            value={this.state.admission}
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...formItemLayout} label="園區介紹">
          <TextArea
            rows={5}
            id="intro"
            value={this.state.intro}
            onChange={e => this.onInputChanged(e)}
            placeholder={placehoders.intro}
          />
        </FormItem>
        <FormItem {...formItemLayout} label="官方網站">
          <Input
            type="text"
            id="website"
            placeholder={placehoders.website}
            value={this.state.website}
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" onClick={success}>
            更新資料
          </Button>
        </FormItem>
      </Form>
    );
  }
}
