import React, { Component } from "react";
import SideBar from "./sideBar";

class MembershipPage extends Component {
  state = {};
  render() {
    return (
      <div id="content">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col col-lg-12 col-xl-10">
              <div class="row has-sidebar">
                <SideBar />
                <div class="col-md-7 col-lg-8 col-xl-8">
                  <div class="page-header bordered">
                    <h1>Membership</h1>
                  </div>
                  <form action="index.php">
                    <h3 class="subheadline">Current Plans</h3>

                    <div class="card">
                      <div class="media mt-0">
                        <div class="media-left">
                          {" "}
                          <a href="agent.html">
                            {" "}
                            <img
                              class="media-object rounded-circle"
                              src="/img/demo/badge.png"
                              width="100"
                              height="100"
                              alt=""
                            />{" "}
                          </a>{" "}
                        </div>
                        <div class="media-body">
                          <a class="btn btn-link float-right" href="#">
                            Cancel Plan
                          </a>
                          <h4 class="media-heading">
                            <a href="plans.html">
                              Plan <strong>Pro</strong>
                            </a>
                          </h4>
                          <p class="text-muted">Expiring on 1st August 2018</p>
                        </div>
                      </div>
                    </div>
                    <a href="plans.html" class="btn btn-light">
                      Upgrade Plan
                    </a>
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

export default MembershipPage;
