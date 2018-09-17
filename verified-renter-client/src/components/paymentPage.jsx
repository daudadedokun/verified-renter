import React, { Component } from "react";
import SideBar from "./sideBar";

class PaymentPage extends Component {
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
                    <h1>Payments Settings</h1>
                  </div>
                  <form action="index.php">
                    <div className="form-group">
                      <div className="checkbox">
                        <input
                          type="checkbox"
                          id="private_message"
                          checked=""
                        />
                        <label for="private_message">
                          Allow auto debit from default payment source on
                          renewal
                        </label>
                      </div>
                    </div>
                    <h3 className="subheadline">Credit Cards &amp; Gateways</h3>
                    <ul className="list-group no-border list-unstyled v2">
                      <li>
                        <i className="fa fa-fw fa-cc-paypal icon" /> Paypal{" "}
                        <a href="" className="btn btn-sm btn-link set-default">
                          Set Default
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-fw fa-cc-stripe icon" /> Stripe{" "}
                        <a href="" className="btn btn-sm btn-link set-default">
                          Set Default
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-fw fa-credit-card icon hidden-xs" />{" "}
                        <span className="card-number">**** **** **** 2132</span>
                        <a className="btn btn-sm btn-primary">
                          <i className="fa fa-trash-o" />
                        </a>{" "}
                        <span className="default">Default</span>
                      </li>
                      <li>
                        <i className="fa fa-fw fa-credit-card icon hidden-xs" />{" "}
                        <span className="card-number">**** **** **** 5643</span>
                        <a className="btn btn-sm btn-primary">
                          <span>
                            <i className="fa fa-trash-o" />
                          </span>
                        </a>{" "}
                        <a href="" className="btn btn-sm btn-link set-default">
                          Set Default
                        </a>
                      </li>
                      <li>
                        <i className="fa fa-fw fa-credit-card icon hidden-xs" />{" "}
                        <span className="card-number">**** **** **** 9843</span>
                        <a className="btn btn-sm btn-primary">
                          <i className="fa fa-trash-o" />
                        </a>{" "}
                        <a href="" className="btn btn-sm btn-link set-default">
                          Set Default
                        </a>
                      </li>
                    </ul>
                    <h3 className="subheadline">Add Credit Card</h3>
                    <div className="card">
                      <div className="form-group">
                        <label>Card Number</label>
                        <div className="input-group input-group-lg">
                          {" "}
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="icon fa fa-fw fa-credit-card-alt" />
                            </span>
                          </div>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="cc_number"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-8">
                          <label>Expiration Date (Month/Year)</label>
                          <div className="row">
                            <div className="col-md-7">
                              <div className="form-group">
                                <select className="form-control form-control-lg ui-select">
                                  <option value="jan">January</option>
                                  <option value="feb">February</option>
                                  <option value="mar">March</option>
                                  <option value="apr">April</option>
                                  <option value="may">May</option>
                                  <option value="jun">June</option>
                                  <option value="jul">July</option>
                                  <option value="aug">August</option>
                                  <option value="sep">September</option>
                                  <option value="oct">October</option>
                                  <option value="nov">November</option>
                                  <option value="dec">December</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-5">
                              <div className="form-group">
                                <select className="form-control form-control-lg ui-select">
                                  <option value="2015">2015</option>
                                  <option value="2016">2016</option>
                                  <option value="2017">2017</option>
                                  <option value="2018">2018</option>
                                  <option value="2019">2019</option>
                                  <option value="2020">2020</option>
                                  <option value="2021">2021</option>
                                  <option value="2022">2022</option>
                                  <option value="2023">2023</option>
                                  <option value="2024">2024</option>
                                  <option value="2025">2025</option>
                                  <option value="2026">2026</option>
                                  <option value="2027">2027</option>
                                  <option value="2028">2028</option>
                                  <option value="2029">2029</option>
                                  <option value="2030">2030</option>
                                </select>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <label>Security Code</label>
                            <input
                              type="text"
                              className="form-control form-control-lg"
                            />
                          </div>
                        </div>
                      </div>
                      <p>
                        You agree to authorize the use of your credit card for
                        this deposit and future payments.
                      </p>
                      <button className="btn btn-light" id="add_card">
                        Add Card
                      </button>
                    </div>
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

export default PaymentPage;
