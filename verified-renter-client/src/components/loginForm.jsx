import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { usernameOrEmail: "", password: "" },
    errors: {}
  };

  schema = {
    usernameOrEmail: Joi.string()
      .required()
      .label("Email or Username"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    try {
      const { data } = this.state;
      await auth.login(data.usernameOrEmail, data.password);
      window.location = "/";
    } catch (ex) {
      if (
        ex.response &&
        (ex.response.status === 401 || ex.response.status === 403)
      ) {
        const errors = { ...this.state.errors };
        errors.usernameOrEmail = "invalid email or password";
        this.setState({ errors });
      } else {
        console.error(ex);
      }
    }
  };

  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-md-12 col-lg-10 col-xl-8">
              <div className="page-header">
                <h1>Please sign in or register</h1>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <div className="container">
            <div className="row justify-content-md-center align-items-center">
              <div className="col col-md-6  col-lg-5 col-xl-4">
                <ul className="nav nav-tabs tab-lg" role="tablist">
                  <li role="presentation" className="nav-item">
                    <Link className="nav-link active" to="/loginForm">
                      Sign In
                    </Link>
                  </li>
                  <li role="presentation" className="nav-item">
                    <Link className="nav-link" to="/registerForm">
                      Register
                    </Link>
                  </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="login">
                    <form onSubmit={this.handleSubmit}>
                      {this.renderInput(
                        "usernameOrEmail",
                        "Email Address",
                        "Email or username"
                      )}
                      {this.renderInput(
                        "password",
                        "Password",
                        "Enter your Password",
                        "password"
                      )}

                      <p className="text-lg-right">
                        <Link to="forgot-password.html">Forgot Password</Link>
                      </p>
                      <div className="checkbox">
                        <input type="checkbox" id="remember_me" />
                        <label htmlFor="remember_me">Remember Me</label>
                      </div>
                      {this.renderButton("Sign in")}
                    </form>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-lg-5 col-xl-4">
                <div className="socal-login-buttons">
                  {" "}
                  <Link
                    to="#"
                    className="btn btn-social btn-block btn-facebook"
                  >
                    <i className="icon fa fa-facebook" /> Continue with Facebook
                  </Link>{" "}
                  <Link to="#" className="btn btn-social btn-block btn-twitter">
                    <i className="icon fa fa-twitter" /> Continue with Twitter
                  </Link>{" "}
                  <Link to="#" className="btn btn-social btn-block btn-google">
                    <i className="icon fa fa-google" /> Continue with Google
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
