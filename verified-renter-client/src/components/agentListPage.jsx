import React, { Component } from "react";
import { getUsers } from "../services/userService";
import { getPropertys } from "../services/propertyService";
import Pagination from "./common/pagination";
import { paginate } from "../utils/paginate";
import ListGroup from "./common/listGroup";
import UsersTable from "./usersTable";
import _ from "lodash";
import { getMyProfile } from "../services/userService";

class AgentList extends Component {
  state = {
    users: [],
    propertys: [],
    currentPage: 1,
    pageSize: 4,
    sortColumn: { path: "title", order: "asc" }
  };

  async componentDidMount() {
    const { data } = await getPropertys();
    const propertys = [{ id: "", name: "All property" }, ...data];

    const { data: users } = await getUsers();
    this.setState({ users, propertys });

    await getMyProfile().then(profile => {
      console.log(profile);
    });
  }

  handlePropertySelect = property => {
    this.setState({ selectedProperty: property, currentPage: 1 });
  };

  handleDelete = user => {
    const users = this.state.users.filter(u => u.id !== user.id);
    this.setState({ users });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  getPagedData = () => {
    const {
      currentPage,
      pageSize,
      sortColumn,
      selectedProperty,
      users: allUsers
    } = this.state;

    const filtered =
      selectedProperty && selectedProperty._id
        ? allUsers.filter(u => u.property._id === selectedProperty._id)
        : allUsers;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const users = paginate(sorted, currentPage, pageSize);

    return { totalCount: filtered.length, data: users };
  };
  render() {
    const { length: count } = this.state.users;
    const { currentPage, pageSize, sortColumn } = this.state;

    if (count === 0) return <p>There are no property in the database.</p>;

    const { totalCount, data: users } = this.getPagedData();

    return (
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-12 col-xl-10">
            <div className="row has-sidebar">
              <ListGroup
                items={this.state.propertys}
                selectedItem={this.state.selectedProperty}
                onItemSelect={this.handlePropertySelect}
              />
              <div className="col-md-7 col-lg-8 col-xl-8">
                <div className="page-header bordered mt0">
                  Showing {totalCount} agents in the database.
                </div>

                <div className="clearfix" />
                <UsersTable
                  users={users}
                  onDelete={this.handleDelete}
                  sortColumn={sortColumn}
                  onSort={this.handleSort}
                />
                <Pagination
                  itemsCount={totalCount}
                  pageSize={pageSize}
                  currentPage={currentPage}
                  onPageChange={this.handlePageChange}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AgentList;
