import React from "react";
import { Button, Radio, Input, Form, Avatar, Modal, Spin } from "antd";
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
  name: "奧爾森林學堂",
  address: "桃園市桃園區公園路42號",
  tel: "03-3946061",
  businessHour: " 08：00~17：00",
  admission: "免費",
  intro:
    "「奧爾森林學堂」位於素有「桃園後花園」美譽的虎頭山公園內，在2012年以不破壞公園內景觀及樹木為原則下，在林木間搭起木製空中步道，同時利用雀榕善於纏繞的特性讓樹木與樹屋共生，打造出充滿生命力的三座「活」樹屋，並以大大小小的貓頭鷹裝飾其中，命名為「奧爾森林學堂」。",
  website: "https://travel.tycg.gov.tw/zh-tw/Travel/Attraction/14"
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
      loading: true,
      ...val
    };
  }

  componentDidMount() {
    this.setState({
      loading: false
    });
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
      <Spin spinning={this.state.loading}>
        <Form>
          <FormItem {...formItemLayout}>
            <h1>基本資訊</h1>
          </FormItem>

          <FormItem {...formItemLayout} label="用戶商標">
            <Avatar size="large" src="https://i.imgur.com/93M0VZr.jpg" />
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
      </Spin>
    );
  }
}
