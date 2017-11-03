import React from "react";
import {
  Button,
  Input,
  Form,
  Checkbox,
  Row,
  Col,
  Select,
  Icon,
  Spin
} from "antd";
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
  state = {
    loading: true
  };
  componentDidMount() {
    this.setState({
      loading: false
    });
  }
  render() {
    return (
      <Spin spinning={this.state.loading}>
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
                  <Checkbox value="A">入口處</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="B">樹屋</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="C">溜滑梯</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="D">恐龍雕像</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="E">步道</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="F">烤肉區</Checkbox>
                </Col>
                <Col span={8}>
                  <Checkbox value="G">貓頭鷹福寶</Checkbox>
                </Col>
              </Row>
            </Checkbox.Group>
          </FormItem>

          <FormItem {...formItemLayout} label="關卡優惠券">
            <Select placeholder="請選擇優惠券" onChange={handleChange}>
              <Option value="A">熱狗小販全品項8折，滿200再送中杯可樂</Option>
              <Option value="B">厭世恐龍模型買二送一，買三送二</Option>
              <Option value="C">免費兌換福寶明信片</Option>
              <Option value="D">桃園市長鄭文燦親筆簽名乙份</Option>
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
      </Spin>
    );
  }
}
