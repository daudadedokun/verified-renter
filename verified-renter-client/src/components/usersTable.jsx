import React, { Component } from "react";

class UsersTable extends Component {
  state = {};

  raiseSort = path => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    if (column.path !== sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };
  render() {
    const { users, onDelete } = this.props;
    return (
      <div className="item-listing list">
        {users.map(user => (
          <div className="item clickable" key={user.id}>
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
                <a
                  href="#"
                  className="remove-item"
                  onClick={() => onDelete(user)}
                >
                  <i className="fa fa-trash-o" /> Delete
                </a>
              </div>
              <div className="col-md-9">
                {" "}
                <a href="agent.html" className="btn btn-primary float-right">
                  View Profile
                </a>
                <h3 className="item-title">
                  <a onClick={() => this.raiseSort("title")}>
                    {user.firstName} {user.lastName}
                  </a>
                </h3>
                <div className="item-location">
                  <i className="fa fa-map-marker" /> Kirkstone Road,
                  Middlesbrough TS3
                </div>
                <div className="item-description">
                  We have a profoundly knowledgeable and dedicated team who are
                  well connected with this market and are extremely capable at
                  matching tenants to properties.
                </div>
                <div className="item-actions">
                  {" "}
                  <a href="tel:02080226348">
                    <i className="fa fa-phone" /> 020 8022 6348
                  </a>{" "}
                  <a href="agent.html">
                    <i className="fa fa-envelope-o" /> Contact Agent
                  </a>{" "}
                  <a href="#">
                    <i className="fa fa-home"> Flat</i>
                  </a>
                </div>
              </div>
            </div>
            {/* {this.renderSortIcon(this.props.column)} */}
          </div>
        ))}
      </div>
    );
  }
}

export default UsersTable;
