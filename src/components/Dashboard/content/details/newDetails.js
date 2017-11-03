import React from "react";
import { Button, Radio, Input, Form, Upload, Icon, message } from "antd";
import { Link } from "react-router-dom";
import Map from "../../map";

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
  time: "請輸入時間"
};

const tag = {
  category: "地標類別",
  name: "名稱",
  time: "時間"
};
const preTag = {
  store: "商家",
  facility: "設施",
  landmark: "地標",
  exhibition: "展區",
  accommodation: "住宿區",
  time1: "營業",
  time2: "開放"
};

const category = {
  facility: "設施",
  exhibition: "展區",
  restaurant: "餐廳",
  store: "商店",
  landmark: "地標",
  experiencearea: "體驗區",
  servicecenter: "服務中心",
  safetyequipment: "安全設備",
  restroom: "衛生間",
  accommodation: "住宿區"
};
const categoryRadio = Object.entries(category).map(el => {
  return (
    <Radio key={el[0]} value={el[1]} className="radiobutton">
      {el[1]}
    </Radio>
  );
});

function beforeUpload(file) {
  const isPNG = file.type === "image/png";
  if (!isPNG) {
    message.error("You can only upload PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isPNG && isLt2M;
}

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

export default class newDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      catagory: "設施",
      name_tag: preTag.store + tag.name,
      time_tag: preTag.time1 + tag.time
    };
  }

  catagoryOnChanged = e => {
    this.setState({
      catagory: e.target.value
    });
    switch (e.target.value) {
      case category.restaurant:
      case category.store:
        this.setState({
          name_tag: preTag.store + tag.name,
          time_tag: preTag.time1 + tag.time
        });
        break;
      case category.facility:
      case category.restroom:
      case category.safetyequipment:
      case category.servicecenter:
      case category.experiencearea:
        this.setState({
          name_tag: preTag.facility + tag.name,
          time_tag: preTag.time2 + tag.time
        });
        break;
      case category.landmark:
        this.setState({
          name_tag: preTag.landmark + tag.name,
          time_tag: preTag.time2 + tag.time
        });
        break;
      case category.exhibition:
        this.setState({
          name_tag: preTag.exhibition + tag.name,
          time_tag: preTag.time2 + tag.time
        });
        break;
      case category.accommodation:
        this.setState({
          name_tag: preTag.accommodation + tag.name,
          time_tag: preTag.time1 + tag.time
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

  handleChange = info => {
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl =>
        this.setState({ imageUrl })
      );
    }
  };

  getLoc = loc => {
    this.setState({
      lat: loc.lat,
      lng: loc.lng
    });
  };

  render() {
    const imageUrl = this.state.imageUrl;

    return (
      <Form>
        <FormItem
          {...formItemLayout}
          style={{ paddingTop: 10, paddingLeft: 10 }}
        >
          <h1>新增地標資訊</h1>
        </FormItem>

        <FormItem {...formItemLayout} label={tag.category}>
          <RadioGroup id="category" onChange={this.catagoryOnChanged}>
            {categoryRadio}
          </RadioGroup>
        </FormItem>

        <FormItem {...formItemLayout} label={this.state.name_tag}>
          <Input
            type="text"
            className="Input"
            id="name"
            placeholder={placehoders.name}
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...formItemLayout} label={this.state.time_tag}>
          <Input
            type="text"
            className="Input"
            id="time"
            placeholder={placehoders.time}
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...formItemLayout} label="特殊限制">
          <Input
            type="text"
            className="Input"
            id="limit"
            placeholder="請輸入特殊限制"
            onChange={e => this.onInputChanged(e)}
          />
        </FormItem>

        <FormItem {...formItemLayout} label="簡介">
          <TextArea
            rows={5}
            id="intro"
            onChange={e => this.onInputChanged(e)}
            placeholder="請輸入簡介"
          />
        </FormItem>
        <FormItem {...formItemLayout} label="半透明圖">
          <Upload
            className="avatar-uploader"
            name="avatar"
            showUploadList={false}
            action="//jsonplaceholder.typicode.com/posts/"
            beforeUpload={beforeUpload}
            onChange={this.handleChange}
          >
            {imageUrl ? (
              <img
                style={{ width: 150, height: 112 }}
                src={imageUrl}
                alt=""
                className="avatar"
              />
            ) : (
              <Icon type="plus" className="avatar-uploader-trigger" />
            )}
          </Upload>
        </FormItem>
        <FormItem {...formItemLayout} label="選擇位置" />
        <center>
          <Map />
        </center>
        <FormItem {...tailFormItemLayout}>
          <Link to="/dashboard/Details">
            <Button type="primary" htmlType="submit">
              <Icon type="plus-circle-o" /> 新增
            </Button>
          </Link>
        </FormItem>
      </Form>
    );
  }
}
