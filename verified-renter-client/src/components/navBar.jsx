import React, { Component } from "react";
import { Link } from "react-router-dom";

const NavBar = ({ user }) => {
  console.log("user: ", user);
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="menu">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#menu-content"
          aria-controls="menu-content"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="menu-content">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/"
                data-toggle="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link"
                to="/aboutUsPage"
                data-toggle="false"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About us
              </Link>
            </li>

            <li className="nav-item dropdown">
              {!user && (
                <Link
                  className="nav-link"
                  to="/loginForm"
                  data-toggle="false"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Login
                </Link>
              )}
            </li>

            <li className="nav-item dropdown">
              {user && (
                <React.Fragment>
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Users
                  </Link>
                  <div className="dropdown-menu">
                    <Link to="/agentListPage" className="dropdown-item">
                      Verified List
                    </Link>
                  </div>
                </React.Fragment>
              )}
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown user-account">
              {user && (
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <span>
                    {" "}
                    Hi,
                    {user.name}
                  </span>
                </Link>
              )}
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">
                  My Profile
                </Link>
                <Link to="/changePassword" className="dropdown-item">
                  Change Password
                </Link>
                <Link to="/logout" className="dropdown-item">
                  Log out
                </Link>
              </div>
            </li>
            {user && (
              <li className="nav-item">
                <Link className="nav-link nav-btn" to="/propertyForm">
                  <span>
                    <i className="fa fa-plus" aria-hidden="true" /> Add listing
                  </span>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
