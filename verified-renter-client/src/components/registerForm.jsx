import React, { Component } from "react";
import { Link } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import { register } from "../services/authService";
import { toast } from "react-toastify";

class RegisterForm extends Form {
  state = {
    data: { name: "", username: "", email: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .min(5)
      .label("Password"),
    name: Joi.string()
      .required()
      .label("Full name"),
    email: Joi.string()
      .required()
      .email()
      .label("Email")
  };

  doSubmit = async () => {
    try {
      await register(this.state.data);
      window.location = "/successPage";
    } catch (ex) {
      if (ex.response && ex.response.status === 409) {
        const errors = { ...this.state.errors };
        errors.username = "There is a user with the email";
        this.setState({ errors });
      }
    }
  };
  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row justify-content-md-center align-items-center">
            <div className="col col-md-6  col-lg-5 col-xl-4">
              <ul className="nav nav-tabs tab-lg" role="tablist">
                <li role="presentation" className="nav-item">
                  <Link className="nav-link" to="/loginForm">
                    Sign In
                  </Link>
                </li>
                <li role="presentation" className="nav-item">
                  <Link className="nav-link active" to="/registerForm">
                    Register
                  </Link>
                </li>
              </ul>
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active" id="login">
                  <form onSubmit={this.handleSubmit}>
                    {this.renderInput(
                      "name",
                      "Full name",
                      "Enter your full name"
                    )}
                    {this.renderInput(
                      "username",
                      "Username",
                      "Enter your username"
                    )}
                    {this.renderInput(
                      "email",
                      "Email",
                      "Enter your email address"
                    )}
                    {this.renderInput("password", "Password", "password")}

                    <div className="checkbox">
                      <input type="checkbox" id="terms" />
                      <label htmlFor="">
                        By registering I accept our Terms of Use and Privacy
                      </label>
                    </div>
                    {this.renderButton("Register")}
                  </form>
                </div>
              </div>
              <div> </div>
            </div>

            <div className="col-md-6 col-lg-5 col-xl-4">
              <div className="socal-login-buttons">
                {" "}
                <Link to="#" className="btn btn-social btn-block btn-facebook">
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
    );
  }
}

export default RegisterForm;
