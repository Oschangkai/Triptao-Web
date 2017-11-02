import React from "react";
import { Button, Input, Form, Checkbox, Row, Col, Select, Icon } from "antd";
import { Link } from "react-router-dom";

const FormItem = Form.Item;
const Option = Select.Option;

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

function handleChange(value) {
  console.log(`selected ${value}`);
}

export default class Newgame extends React.Component {
  render() {
    return (
      <Form>
        <FormItem
          {...formItemLayout}
          style={{ paddingTop: 10, paddingLeft: 10 }}
        >
          <h1>新增闖關活動</h1>
        </FormItem>

        <FormItem {...formItemLayout} label="闖關活動名稱">
          <Input type="text" id="name" placeholder="請輸入闖關活動名稱" />
        </FormItem>

        <FormItem {...formItemLayout} label="請選擇關卡內容">
          <Checkbox.Group onChange={onChange}>
            <Row>
              <Col span={8}>
                <Checkbox value="A">石燈籠</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="B">鳥居</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="C">手水舍</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="D">社務所</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="E">參道</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="F">銅馬</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="G">高麗犬</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="H">中門</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="I">拜殿</Checkbox>
              </Col>
              <Col span={8}>
                <Checkbox value="J">本殿</Checkbox>
              </Col>
            </Row>
          </Checkbox.Group>
        </FormItem>

        <FormItem {...formItemLayout} label="關卡優惠券">
          <Select placeholder="請選擇優惠券" onChange={handleChange}>
            <Option value="A">搭乘公車半價優惠</Option>
            <Option value="B">味全埔心牧場門票九折</Option>
            <Option value="C">特約商店九折</Option>
            <Option value="D">市民卡紅利點數加倍送</Option>
          </Select>
        </FormItem>

        <FormItem {...tailFormItemLayout}>
          <Link to="/dashboard/offer/game">
            <Button type="primary" htmlType="submit" onClick={this.success}>
              <Icon type="plus-circle-o" />新增
            </Button>
          </Link>
        </FormItem>
      </Form>
    );
  }
}
