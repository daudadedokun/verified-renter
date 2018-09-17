import React, { Component } from "react";
import SideBar from "./sideBar";
import { Link } from "react-router-dom";

class AccountDelete extends Component {
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
                    <h1>Account Settings</h1>
                  </div>
                  <form>
                    <h3 className="subheadline">Social Connect</h3>
                    <ul className="list-group no-border list-unstyled v2">
                      <li>
                        <i className="fa fa-fw fa-twitter icon" /> Twitter{" "}
                        <Link className="btn btn-primary btn-sm">
                          Disconnect
                        </Link>{" "}
                        <span className="connected">Connected</span>
                      </li>
                      <li>
                        <i className="fa fa-fw fa-facebook icon" /> Facebook{" "}
                        <Link className="btn btn-light btn-sm">Connect</Link>
                      </li>
                      <li>
                        <i className="fa fa-fw fa-google-plus icon" /> Google
                        Plus{" "}
                        <Link className="btn btn-light btn-sm">Connect</Link>
                      </li>
                    </ul>
                    <h3 className="subheadline">Delete Account</h3>
                    <p>
                      If you are no longer interested in using your account
                      click the button below to delete your account.
                    </p>
                    <Link to="#" className="btn btn-lg btn-light">
                      Delete Account
                    </Link>
                    <hr />
                    <div className="form-group action">
                      <button type="submit" className="btn btn-lg btn-primary">
                        Save Settings
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

export default AccountDelete;
