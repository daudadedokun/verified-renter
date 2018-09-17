import React, { Component } from "react";
import SideBar from "./sideBar";
import { Link } from "react-router-dom";

class Exa extends Component {
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
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <Link
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        to="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="true"
                      >
                        Home
                      </Link>
                      <Link
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        to="/profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        Profile
                      </Link>
                      <Link
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        to="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Contact
                      </Link>
                    </div>
                  </nav>
                  <div className="tab-content" id="nav-tabContent">
                    <div
                      className="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      ...
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-profile"
                      role="tabpanel"
                      aria-labelledby="nav-profile-tab"
                    >
                      ...
                    </div>
                    <div
                      className="tab-pane fade"
                      id="nav-contact"
                      role="tabpanel"
                      aria-labelledby="nav-contact-tab"
                    >
                      ...
                    </div>
                  </div>
                  {/**/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Exa;
