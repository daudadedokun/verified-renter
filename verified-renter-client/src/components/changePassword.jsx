import React, { Component } from "react";
import SideBar from "./sideBar";

class ChangePassword extends Component {
  state = {};
  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12 col-xl-10">
              <div className="row has-sidebar">
                <SideBar />
                <div className="col-md-7 col-lg-8 col-xl-8">
                  <div className="page-header bordered">
                    <h1>Change Password</h1>
                  </div>
                  <form action="index.php">
                    <div className="form-group">
                      <label>Your current password</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Your current password"
                        autofocus
                      />
                    </div>
                    <div className="form-group">
                      <label>Your new password</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Your new password"
                      />
                    </div>
                    <div className="form-group">
                      <label>Repeat new password</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        placeholder="Repeat new password"
                      />
                    </div>
                    <hr />
                    <div className="form-group action">
                      <button type="submit" className="btn btn-lg btn-primary">
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChangePassword;
