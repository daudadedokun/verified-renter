import React, { Component } from "react";

const PropertySearchForm = () => {
  return (
    <div className="search-form">
      <div className="card">
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Country, State, County, City, Zip, Title, Address, ID."
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-sm-7">
                <div className="form-group">
                  <select
                    className="form-control form-control-lg ui-select"
                    data-placeholder="Property Type"
                  >
                    <option value="">Property Type</option>
                    <option value="house">House</option>
                    <option value="flat">Flat</option>
                    <option value="apartment">Apartment</option>
                    <option value="land">Land</option>
                    <option value="room">Room</option>
                  </select>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearchForm;
