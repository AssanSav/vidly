import React, { Component } from "react";
import Input from "./commons/input";

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      account: {
        username: "",
        password: "",
      },
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    let account = { ...this.state.account };
    account[e.target.name] = e.target.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    return (
      <>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            type="text"
            label="Username"
            value={account.username}
            handleChange={this.handleChange}
          />
          <Input
            name="password"
            type="password"
            label="Password"
            value={account.password}
            handleChange={this.handleChange}
          />
          <button className="btn-primary">Submit</button>
        </form>
      </>
    );
  }
}

export default LoginForm;
