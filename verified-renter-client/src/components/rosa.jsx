import React, { Component } from "react";
class Rosa extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-4 col-lg-4">
        <button
          id="toggle-filters"
          className="btn btn-primary btn-circle mobile-filter"
        >
          <i className="fa fa-filter" />
        </button>
        <div id="sidebar" className="sidebar-left">
          <button className="close-panel btn btn-white">
            <i className="fa fa-long-arrow-left" />
          </button>
          <div className="sidebar_inner">
            <div id="filters">
              <div className="card">
                <div className="card-header">
                  <h4 className="panel-title">
                    {" "}
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#p_budget"
                      aria-expanded="true"
                      aria-controls="p_type"
                    >
                      {" "}
                      Search verified users{" "}
                      <i className="fa fa-caret-down float-right" />{" "}
                    </a>{" "}
                  </h4>
                </div>
                <div
                  id="p_budget"
                  className="panel-collapse collapse"
                  role="tabpanel"
                >
                  <div className="card-body">
                    <div className="sidebar_inner">
                      <form>
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="location"
                            placeholder="Enter name"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h4 className="panel-title">
                    {" "}
                    <a
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#p_type"
                      aria-expanded="true"
                      aria-controls="p_type"
                    >
                      {" "}
                      Property Type{" "}
                      <i className="fa fa-caret-down float-right" />{" "}
                    </a>{" "}
                  </h4>
                </div>
                <div
                  id="p_type"
                  className="panel-collapse collapse show"
                  role="tabpanel"
                >
                  <div className="card-body">
                    <div className="card shadow agent-search">
                      <ul className="list-group">
                        <li list-group-item>Flat</li>
                        <li list-group-item>Villa</li>
                        <li list-group-item>Condo</li>
                        <li list-group-item>Apartment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Rosa;
