import React, { Component } from "react";

const PropertySideFilter = () => {
  return (
    <div className="col-md-4 col-lg-3">
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
                    Budget <i className="fa fa-caret-down float-right" />{" "}
                  </a>{" "}
                </h4>
              </div>
              <div
                id="p_budget"
                className="panel-collapse collapse"
                role="tabpanel"
              >
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control input-sm"
                          placeholder="Min"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control input-sm"
                          placeholder="Max"
                        />
                      </div>
                    </div>
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
                    Property Type <i className="fa fa-caret-down float-right" />{" "}
                  </a>{" "}
                </h4>
              </div>
              <div
                id="p_type"
                className="panel-collapse collapse show"
                role="tabpanel"
              >
                <div className="card-body">
                  <div className="checkbox ">
                    <input type="checkbox" value="1" id="house" />
                    <label htmlFor="house">House</label>
                  </div>
                  <div className="checkbox ">
                    <input type="checkbox" value="1" id="flat" />
                    <label htmlFor="flat">Flat</label>
                  </div>
                  <div className="checkbox ">
                    <input type="checkbox" value="1" id="appartment" />
                    <label htmlFor="appartment">Appartment</label>
                  </div>
                  <div className="checkbox ">
                    <input type="checkbox" value="1" id="farms" />
                    <label htmlFor="farms">Farms/Lands</label>
                  </div>
                  <div className="checkbox ">
                    <input type="checkbox" value="1" id="room" />
                    <label htmlFor="room">Room</label>
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
                    href="#p_features"
                    aria-expanded="true"
                    aria-controls="p_features"
                  >
                    {" "}
                    Features <i className="fa fa-caret-down float-right" />{" "}
                  </a>{" "}
                </h4>
              </div>
              <div
                id="p_features"
                className="panel-collapse collapse show"
                role="tabpanel"
              >
                <div className="card-body">
                  <div className="checkbox">
                    <input type="checkbox" value="" id="garden" />
                    <label htmlFor="garden"> Garden</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" value="" id="parking" />
                    <label htmlFor="parking"> Parking</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" value="" id="fireplace" />
                    <label htmlFor="fireplace"> Fireplace</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" value="" id="restaurant" />
                    <label htmlFor="restaurant"> Restaurant</label>
                  </div>
                  <div className="checkbox">
                    <input type="checkbox" value="" id="school" />
                    <label htmlFor="school"> School</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySideFilter;
