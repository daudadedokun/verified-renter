import React, { Component } from "react";
import { Link } from "react-router-dom";

class SuccessPage extends Component {
  state = {};
  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-8">
              <div className="error-template text-center">
                {" "}
                <i className="fa fa-check fa-5x text-success mb50 animated zoomIn" />
                <h3 className="main-title centered">
                  <span>Registration Complete</span>
                </h3>
                <div className="main-title-description">
                  {" "}
                  This click on the login button to go to home page{" "}
                </div>
                <div className="error-actions">
                  <Link to="/loginForm" className="btn btn-primary btn-lg">
                    Continue{" "}
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

export default SuccessPage;
