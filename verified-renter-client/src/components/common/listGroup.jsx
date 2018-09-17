import React, { Component } from "react";

const ListGroup = props => {
  const {
    items,
    valueProperty,
    textProperty,
    onItemSelect,
    selectedItem
  } = props;
  return (
    <div className="col-md-5 col-lg-4 col-xl-4 col-sidebar">
      <div id="sidebar" className="sidebar-left">
        <div className="sidebar_inner">
          <div className="card shadow agent-search">
            <h3 className="subheadline mt0">Search Agents</h3>

            <ul className="list-group">
              {items.map(item => (
                <li
                  onClick={() => onItemSelect(item)}
                  key={item[valueProperty]}
                  className={
                    item === selectedItem
                      ? "list-group-item active clickable"
                      : "list-group-item clickable"
                  }
                >
                  {item[textProperty]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
ListGroup.defaultProps = {
  valueProperty: "_id",
  textProperty: "name"
};

export default ListGroup;
