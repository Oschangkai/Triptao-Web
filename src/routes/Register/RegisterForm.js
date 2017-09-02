import React from "react";

import { Form, Icon, Input, Button, Checkbox } from "antd";

import { graphql } from "react-apollo";
import { mutation } from "./RegisterMutation";

import "./Register.css";
const FormItem = Form.Item;

class RegisterForm extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        //console.log("Values: ", values);
        const response = await this.props.mutate({
          variables: values
        });
        //console.log(response); // 此處要做前端錯誤處理
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("與上者輸入的密碼不符！");
    } else {
      callback();
    }
  };

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 6 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 14 }
      }
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 14,
          offset: 6
        }
      }
    };

    return (
      <Form onSubmit={this.handleSubmit} className="register-form">
        <FormItem {...formItemLayout} label="使用者帳號" hasFeedback>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "此欄位必填！" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ fontSize: 13 }} />}
              placeholder="Username"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="電子郵件" hasFeedback>
          {getFieldDecorator("email", {
            rules: [{ required: true, message: "此欄位必填！" },{ type: "email", message: "格式錯誤！" }]
          })(
            <Input
              prefix={<Icon type="mail" style={{ fontSize: 13 }} />}
              placeholder="Email Address"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="密碼" hasFeedback>
          {getFieldDecorator("password", {
            rules: [
              { required: true, message: "此欄位必填！" },
              { validator: this.checkConfirm }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="再次確認密碼" hasFeedback>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "此欄位必填！"
              },
              {
                validator: this.checkPassword
              }
            ]
          })(
            <Input
              prefix={<Icon type="lock" style={{ fontSize: 13 }} />}
              type="password"
              placeholder="Confirm Password"
              onBlur={this.handleConfirmBlur}
            />
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          {getFieldDecorator("aggrement", {
            valuePropName: "checked",
            initialValue: true
          })(
            <Checkbox>
              I've read and accepted the <a href="#">Aggreement</a>
            </Checkbox>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            註冊
          </Button>
        </FormItem>
      </Form>
    );
  }
}
RegisterForm = Form.create()(RegisterForm);

export default graphql(mutation)(RegisterForm);
