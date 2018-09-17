import React, { Component } from "react";

class FeatureItem extends Component {
  state = {};
  render() {
    return (
      <div className="form-group">
        <h3 className="subheadline">Additional Features</h3>
        <div className="feature-list three_cols">
          <div className="checkbox">
            <input type="checkbox" id="Garden" />
            <label htmlFor="Garden">Garden</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Gym" />
            <label htmlFor="Gym">Gym</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Internet" />
            <label htmlFor="Internet">Internet</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Pool" />
            <label htmlFor="Pool">Swimming Pool</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Window" />
            <label htmlFor="Window">Window Covering</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Parking" />
            <label htmlFor="Parking">Parking</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="School" />
            <label htmlFor="School">School</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Bank" />
            <label htmlFor="Bank">Bank</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Metro" />
            <label htmlFor="Metro">Metro</label>
          </div>
          <div className="checkbox">
            <input type="checkbox" id="Airport" />
            <label htmlFor="Airport">Airport</label>
          </div>
        </div>
      </div>
    );
  }
}

export default FeatureItem;
