import React from "react";
import {
  Button,
  Input,
  Form,
  Row,
  Col,
  Icon,
  Checkbox,
  DatePicker
} from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;

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

function onChange(checkedValues) {
  console.log("checked = ", checkedValues);
}

export default class Newcoupon extends React.Component {
  state = {
    indeterminate: true,
    checkAll: false
  };
  render() {
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          style={{ paddingTop: 10, paddingLeft: 10 }}
        >
          <h1>新增優惠券</h1>
        </FormItem>
        <FormItem {...formItemLayout} label="優惠券名稱">
          <Input type="text" id="name" placeholder="請輸入優惠券名稱" />
        </FormItem>
        <FormItem {...formItemLayout} label="請勾選可使用店家">
          <Checkbox.Group onChange={onChange}>
            <Row>
              <Col span={24}>
                <b>美洲探險樂園</b>
              </Col>
              <Col span={4}>
                <Checkbox value="A">急流專賣店</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="B">擎天輪飯館</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <b>歐洲室內樂園</b>
              </Col>
              <Col span={4}>
                <Checkbox value="C">童樂堡</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="D">城堡餐廳</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="E">小歡龍速食店</Checkbox>
              </Col>
              <Col span={6}>
                <Checkbox value="F">風車咖啡屋</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <b>轟浪水樂園</b>
              </Col>
              <Col span={4}>
                <Checkbox value="G">埃及攝影館</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="H">埃及館</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <b>迷你世界</b>
              </Col>
              <Col span={4}>
                <Checkbox value="I">唐人街</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="J">美味樂商品店</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="K">鷺山</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="L">Cafe' WOC</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="M">蔣府宴</Checkbox>
              </Col>
              <Col span={4}>
                <Checkbox value="N">美味樂</Checkbox>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <b>遊園小火車</b>
              </Col>
              <Col span={4}>
                <Checkbox value="O">車站商品店</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </FormItem>

        <FormItem {...formItemLayout} label="截止日期">
          <DatePicker placeholder="請選擇日期" />
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Link to="/dashboard/offer/game">
            <Button type="primary" htmlType="submit" onClick={this.success}>
              <Icon type="plus-circle-o" /> 新增
            </Button>
          </Link>
        </FormItem>
      </Form>
    );
  }
}
