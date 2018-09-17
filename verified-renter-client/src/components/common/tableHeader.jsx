import React, { Component } from "react";

class TableHeader extends Component {
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

  render() {
    return (
      <div class="item-listing list">
        {this.props.columns.map(column => (
          <div class="item">
            <div class="row">
              <div class="col-md-3">
                <div class="item-image">
                  {" "}
                  <img
                    src="/img/demo/profile.jpg"
                    class="img-fluid"
                    alt=""
                  />{" "}
                </div>
              </div>
              <div class="col-md-9">
                {" "}
                <a href="agent.html" class="btn btn-primary float-right">
                  View Profile
                </a>
                <h3 class="item-title">
                  <a onClick={() => this.raiseSort(column.path)}>
                    {column.label}
                  </a>
                </h3>
                <div class="item-location">
                  <i class="fa fa-map-marker" /> Kirkstone Road, Middlesbrough
                  TS3
                </div>
                <div class="item-description">
                  We have a profoundly knowledgeable and dedicated team who are
                  well connected with this market and are extremely capable at
                  matching tenants to properties.
                </div>
                <div class="item-actions">
                  {" "}
                  <a href="tel:02080226348">
                    <i class="fa fa-phone" /> 020 8022 6348
                  </a>{" "}
                  <a href="agent.html">
                    <i class="fa fa-envelope-o" /> Contact Agent
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default TableHeader;
