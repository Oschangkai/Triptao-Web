import React from "react";
import { Link } from "react-router-dom";

import { Form, Icon, Input, Button, Checkbox } from "antd";

import "./Login.css";
const FormItem = Form.Item;

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Values: ", values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem>
          {getFieldDecorator("userName", {
            rules: [{ required: true, message: "使用者帳號不得為空！" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="使用者帳號"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "密碼不得為空！" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="密碼"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>記住我</Checkbox>)}
          <a className="login-form-forgot" href="">
            忘記密碼？
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            <Icon type="login" />登入
          </Button>
          沒有帳號嗎？ <Link to="/register">馬上註冊！</Link>
        </FormItem>
      </Form>
    );
  }
}

export default Form.create()(LoginForm);
