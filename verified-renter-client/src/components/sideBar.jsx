import React, { Component } from "react";
import { Link } from "react-router-dom";

class SideBar extends Component {
  state = {};
  render() {
    return (
      <div className="col-md-5 col-lg-4 col-xl-4 col-sidebar">
        <div id="sidebar" className="sidebar-left">
          <div className="sidebar_inner">
            <div className="list-group no-border list-unstyled">
              <span className="list-group-item heading">Manage Listings</span>
              <Link to="/propertyForm" className="list-group-item">
                <i className="fa fa-fw fa-plus-square-o" /> Add Listing
              </Link>
              {/* <Link
                to="bookMarkListing"
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <i className="fa fa-fw fa-bookmark-o" /> Bookmarked Listing
                </span>
                <span className="badge badge-primary badge-pill">10</span>
              </Link> */}
              <Link
                to="/listings"
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <span>
                  <i className="fa fa-fw fa-bars" /> My Listings
                </span>
                <span className="badge badge-primary badge-pill">7</span>
              </Link>
              <span className="list-group-item heading">Manage Account</span>
              <Link to="my_profile.html" className="list-group-item active">
                <i className="fa fa-fw fa-pencil" /> My Profile
              </Link>
              <Link to="/changePassword" className="list-group-item">
                <i className="fa fa-fw fa-lock" /> Change Password
              </Link>
              <Link to="/notificationPage" className="list-group-item">
                <i className="fa fa-fw fa-bell-o" /> Notifications
              </Link>
              <Link to="/membershipPage" className="list-group-item">
                <i className="fa fa-fw fa-cubes" /> Membership
              </Link>
              <Link to="/paymentPage" className="list-group-item">
                <i className="fa fa-fw fa-credit-card" /> Payments
              </Link>
              <Link to="/accountDelete" className="list-group-item">
                <i className="fa fa-fw fa-cog" /> Account
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SideBar;
