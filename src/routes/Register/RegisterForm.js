import React from "react";
//import PropTypes from 'prop-types';
import { Button, Checkbox, Input } from "antd";
import { Form } from "antd";
import { graphql } from "react-apollo";

import { mutation } from "./RegisterMutation";

class RegisterForm extends React.Component {
  state = {
    username: "",
    //email: "",
    password: ""
    //isAdmin: false
  };

  onChange = e => {
    if (e.target.name === "isAdmin") {
      this.setState({
        [e.target.name]: e.target.checked
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value
      });
    }
  };

  onSubmit = async () => {
    const response = await this.props.mutate({
      variables: this.state
    });
    console.log(response);
    //await console.log(this.state);
  };

  render() {
    return (
      <Form>
        <Input
          name="username"
          placeholder="使用者帳號"
          onChange={e => this.onChange(e)}
          value={this.state.username}
        />
        <br />
        <Input
          name="email"
          placeholder="電子郵件"
          onChange={e => this.onChange(e)}
          value={this.state.email}
        />
        <br />
        <Input
          name="password"
          placeholder="密碼"
          type="password"
          onChange={e => this.onChange(e)}
          value={this.state.password}
        />
        <br />
        <Checkbox
          label="管理者身份？"
          name="isAdmin"
          checked={this.state.isAdmin}
          onChange={e => this.onChange(e)}
        />
        <br />
        <br />
        <Button raised color="primary" onClick={() => this.onSubmit()}>
          註冊
        </Button>
      </Form>
    );
  }
}

/* RegisterForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}; */

export default graphql(mutation)(RegisterForm);
