import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService"; // call one function

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  // the idea behind joi is to define a schema which is a single object
  schema = {
    username: Joi.string()
      .required()
      // .min(3)
      // .max(30)
      // .alphanum()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    //call the server
    try {
      // if auth server is devopled so the 4 following lines should be incomment
      const { data } = this.state;
      await auth.login(data.username, data.password);

      const { state } = this.props.location;
      //this.props.history.push("/");
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        //client did sth wrong
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;
    return (
      <div>
        <h1>login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
