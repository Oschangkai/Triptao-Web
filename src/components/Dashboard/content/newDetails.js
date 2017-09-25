import React from "react";
import { Button, Radio, Input, Form } from "antd";

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
const { TextArea } = Input;

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
  intro: "請輸入簡介"
};

const val = {
  name: "奧爾森林學堂",
  address: "桃園市桃園區公園路 42 號",
  tel: "3946061",
  businessHour: "08：00 ~ 17：00",
  intro:
    "「奧爾森林學堂」位於素有「桃園後花園」美譽的虎頭山公園內，在2012年以不破壞公園內景觀及樹木為原則下，在林木間搭起木製空中步道，同時利用雀榕善於纏繞的特性讓樹木與樹屋共生，打造出充滿生命力的三座「活」樹屋，並以大大小小的貓頭鷹裝飾其中，命名為「奧爾森林學堂」。其中有設計六角形的「讀樹教室」，可近距離觀察樹木生長的生態；從貓頭鷹造型的「咕咕屋」則可窺見鳥類生態；至於船型的「綠野方舟」則是孩子們最佳表演平台，待再久都不厭煩。"
};

const tag = {
  category: "地區分類",
  name: "名稱",
  address: "地址",
  contact: "聯絡電話",
  businessHour: "時間",
  intro: "介紹"
};
const preTag = {
  store: "商家",
  spot: "景點",
  park: "園區",
  exhibition: "展區",
  time1: "營業",
  time2: "開放"
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
    <Radio key={el[0]} value={el[1]} className="radiobutton">
      {el[1]}
    </Radio>
  );
});

export default class newDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catagory: "美食",
      name_tag: preTag.store + tag.name,
      address_tag: preTag.store + tag.address,
      contact_tag: tag.contact,
      businessHour_tag: preTag.time1 + tag.businessHour,
      intro_tag: preTag.store + tag.intro,
      ...val
    };
  }

  catagoryOnChanged = e => {
    this.setState({
      catagory: e.target.value
    });
    switch (e.target.value) {
      case category.restaurant:
      case category.mall:
        this.setState({
          name_tag: preTag.store + tag.name,
          address_tag: preTag.store + tag.address,
          businessHour_tag: preTag.time1 + tag.businessHour,
          intro_tag: preTag.store + tag.intro
        });
        break;
      case category.spot:
        this.setState({
          name_tag: preTag.spot + tag.name,
          address_tag: preTag.spot + tag.address,
          businessHour_tag: preTag.time2 + tag.businessHour,
          intro_tag: preTag.spot + tag.intro
        });
        break;
      case category.park:
        this.setState({
          name_tag: preTag.park + tag.name,
          address_tag: preTag.park + tag.address,
          businessHour_tag: preTag.time1 + tag.businessHour,
          intro_tag: preTag.park + tag.intro
        });
        break;
      case category.exhibition:
        this.setState({
          name_tag: preTag.exhibition + tag.name,
          address_tag: preTag.exhibition + tag.address,
          businessHour_tag: preTag.time2 + tag.businessHour,
          intro_tag: preTag.exhibition + tag.intro
        });
        break;
      default:
    }
  };

  onInputChanged = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  render() {
    return (
      <Form>
        <FormItem {...formItemLayout} style={{ paddingTop: 10, paddingLeft: 10 }}>
          <h1>新增地標資訊</h1>
        </FormItem>
        <FormItem {...formItemLayout} label={tag.category}>
          <RadioGroup
            id="category"
            onChange={this.catagoryOnChanged}
            value={this.state.catagory}
          >
            {categoryRadio}
          </RadioGroup>
        </FormItem>

        <FormItem {...formItemLayout} label={this.state.name_tag}>
          <Input
            type="text"
            className="Input"
            id="name"
            placeholder={placehoders.name}
            value={this.state.name}
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...formItemLayout} label={this.state.address_tag}>
          <Input
            type="text"
            className="Input"
            id="address"
            placeholder={placehoders.address}
            value={this.state.address}
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...formItemLayout} label={this.state.contact_tag}>
          <Input
            type="text"
            id="tel"
            placeholder={placehoders.tel}
            value={this.state.tel}
            onChange={e => this.onInputChanged(e)}
            className="Input"
          />
        </FormItem>

        <FormItem {...formItemLayout} label={this.state.businessHour_tag}>
          <Input
            type="text"
            id="businessHour"
            placeholder={placehoders.businessHour}
            value={this.state.businessHour}
            onChange={e => this.onInputChanged(e)}
            className="Input"
          />
        </FormItem>

        <FormItem {...formItemLayout} label={this.state.intro_tag}>
          <TextArea
            rows={5}
            id="intro"
            value={this.state.intro}
            onChange={e => this.onInputChanged(e)}
            placeholder={placehoders.intro}
          />
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            送出
          </Button>
        </FormItem>
      </Form>
    );
  }
}
