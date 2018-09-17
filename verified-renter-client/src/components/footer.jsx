import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div>
        <button className="btn btn-primary btn-circle" id="to-top">
          <i className="fa fa-angle-up" />
        </button>
        <footer id="footer" className="bg-light footer-light">
          <div className="container container-1000">
            <div className="footer-credits d-lg-flex justify-content-lg-between align-items-center">
              <div>
                Powered by{" "}
                <a href="#" target="_blank">
                  <strong>dokuns</strong>
                </a>
              </div>

              <div>© 2018 Daud Adedokun. All Rights Reserved</div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
