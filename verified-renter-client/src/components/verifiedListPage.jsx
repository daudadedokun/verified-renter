import React, { Component } from "react";
import { getUsers } from "../services/userService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import Rosa from "./rosa";

class VerifiedListPage extends Component {
  state = {
    users: [],
    currentPage: 1,
    pageSize: 4
  };

  async componentDidCatch() {
    const { data: users } = await getUsers();
    this.setState({ users });
  }

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
  render() {
    const { length: count } = this.state.users;
    const { currentPage, pageSize, users: allUser } = this.state;
    if (count === 0) return <p>There are no property in the database.</p>;

    const users = paginate(allUser, currentPage, pageSize);
    return (
      <div id="content">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-8 col-xl-10">
              <div className="row has-sidebar">
                <Rosa />
                {/* <div className="col-md-5 col-lg-4 col-xl-4 col-sidebar">
                  <div id="sidebar" className="sidebar-left">
                    <div className="sidebar_inner">
                      <div className="card shadow agent-search">
                        <h3 className="subheadline mt0">
                          Search verified users
                        </h3>
                        <form>
                          <div className="form-group">
                            <label htmlFor="location">Enter Name..</label>
                            <input
                              type="text"
                              className="form-control"
                              id="location"
                              placeholder="Enter Location, landmark.."
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-lg btn-block btn-primary"
                          >
                            Search
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div> */}
                <div className="col-md-7 col-lg-8 col-xl-8">
                  <div className="page-header bordered mt0">
                    Showing {count} verified users in the database.
                  </div>
                  <div className="clearfix" />

                  <div className="item-listing list">
                    {users.map(user => (
                      <div className="item" key={user.id}>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="item-image">
                              {" "}
                              <img
                                src="/img/demo/profile3.jpg"
                                className="img-fluid"
                                alt=""
                              />{" "}
                            </div>
                          </div>
                          <div className="col-md-9">
                            {" "}
                            <a
                              href="agent.html"
                              className="btn btn-primary float-right"
                            >
                              View Profile
                            </a>
                            <h3 className="item-title">
                              <a href="agent.html">John Doe - John Estate</a>
                            </h3>
                            <div className="item-location">
                              <i className="fa fa-map-marker" /> Kirkstone Road,
                              Middlesbrough TS3
                            </div>
                            <div className="item-description">
                              We have a profoundly knowledgeable and dedicated
                              team who are well connected with this market and
                              are extremely capable at matching tenants to
                              properties.
                            </div>
                            <div className="item-actions">
                              {" "}
                              <a href="tel:02080226348">
                                <i className="fa fa-phone" /> 020 8022 6348
                              </a>{" "}
                              <a href="agent.html">
                                <i className="fa fa-envelope-o" /> Contact Agent
                              </a>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Pagination
                    itemsCount={count}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VerifiedListPage;
