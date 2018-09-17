import React, { Component } from "react";
import { getListings } from "../services/listingService";
import PropertySearchForm from "../propertySearchForm";
import PropertySideFilter from "./propertySideFilter";

class PropertyGrid extends Component {
  state = { listings: [] };

  async componentDidMount() {
    const { data: listings } = await getListings();
    this.setState({ listings });
  }

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <PropertySearchForm />
        </div>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12 col-xl-10">
              <div className="page-header">
                <h1>Property For rent in Winnipeg, Manitoba TS3</h1>
              </div>
            </div>
          </div>
        </div>
        <div id="content">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="row has-sidebar">
                  <PropertySideFilter />
                  <div className="col-md-8 col-lg-9">
                    <div className="sorting">
                      <div className="row justify-content-between">
                        <div className="col-sm-5 col-md-5 col-lg-4 col-xl-3" />
                      </div>
                    </div>
                    <div className="clearfix" />
                    <div className="item-listing grid">
                      {this.state.listings.map(listing => (
                        <div className="row">
                          <div className="col-lg-6">
                            <div className="item">
                              <div className="item-image">
                                <a href="property_single.html">
                                  <img
                                    src={listing.images[0]}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <div className="item-meta">
                                    <div className="item-price">
                                      {listing.price} <small>$777 / sq m</small>{" "}
                                    </div>
                                  </div>
                                </a>{" "}
                                <a href="#" className="save-item">
                                  <i className="fa fa-star" />
                                </a>{" "}
                              </div>
                              <div className="item-info">
                                <h3 className="item-title">{listing.title}</h3>
                                <div className="item-location">
                                  <i className="fa fa-map-marker" />
                                  {listing.location}
                                </div>
                                <div className="item-details-i">
                                  {" "}
                                  <span
                                    className="bedrooms"
                                    data-toggle="tooltip"
                                    title="3 Bedrooms"
                                  >
                                    3 <i className="fa fa-bed" />
                                  </span>{" "}
                                  <span
                                    className="bathrooms"
                                    data-toggle="tooltip"
                                    title="2 Bathrooms"
                                  >
                                    2 <i className="fa fa-bath" />
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="item">
                              <div className="item-image">
                                <a href="property_single.html">
                                  <img
                                    src={listing.images[0]}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <div className="item-meta">
                                    <div className="item-price">
                                      {listing.price} <small>$777 / sq m</small>{" "}
                                    </div>
                                  </div>
                                </a>{" "}
                                <a href="#" className="save-item">
                                  <i className="fa fa-star" />
                                </a>{" "}
                              </div>
                              <div className="item-info">
                                <h3 className="item-title">{listing.title}</h3>
                                <div className="item-location">
                                  <i className="fa fa-map-marker" />{" "}
                                  {listing.location}
                                </div>
                                <div className="item-details-i">
                                  {" "}
                                  <span
                                    className="bedrooms"
                                    data-toggle="tooltip"
                                    title="3 Bedrooms"
                                  >
                                    3{/* {listing.property.name}{" "} */}
                                    <i className="fa fa-bed" />
                                  </span>{" "}
                                  <span
                                    className="bathrooms"
                                    data-toggle="tooltip"
                                    title="2 Bathrooms"
                                  >
                                    2{/* {listing.property.name}{" "} */}
                                    <i className="fa fa-bath" />
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <nav aria-label="Page navigation">
                      <ul className="pagination">
                        <li className="page-item">
                          <a className="page-link" href="#">
                            &laquo;
                          </a>
                        </li>
                        <li className="page-item active">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            &raquo;
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PropertyGrid;
