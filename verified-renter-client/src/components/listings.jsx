import React, { Component } from "react";
import SideBar from "./sideBar";
import { Link } from "react-router-dom";
import { getListings, deleteListing } from "../services/listingService";
import Pagination from "./common/pagination";
import { getPropertys } from "../services/propertyService";
import { paginate } from "../utils/paginate";
import { toast } from "react-toastify";

class Listings extends Component {
  state = {
    listings: [],
    propertys: [],
    currentPage: 1,
    pageSize: 4
  };

  async componentDidMount() {
    const { data: listings } = await getListings();
    this.setState({ listings });

    const { data: propertys } = await getPropertys();
    this.setState({ propertys });
  }

  handleDelete = async listing => {
    const orginalListing = this.state.listings;
    const listings = orginalListing.filter(l => l.id !== listing.id);
    this.setState({ listings });
    try {
      await deleteListing(listing.id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This property has already been deleted.");

      this.setState({ listings: orginalListing });
    }
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.listings;
    const { currentPage, pageSize, listings: allListing } = this.state;
    if (count === 0) return <p>There are no property in the database.</p>;

    const listings = paginate(allListing, currentPage, pageSize);
    return (
      <div>
        <div id="content">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="row has-sidebar">
                  <SideBar />
                  <div className="col-md-7 col-lg-8 col-xl-8">
                    <div className="page-header bordered">
                      <h5 className="item-title">
                        Showing {count} listing in the database.
                      </h5>
                    </div>
                    <div className="item-listing list">
                      {listings.map(listing => (
                        <div className="item" key={listing.id}>
                          <div className="row">
                            <div className="col-lg-5">
                              <div className="item-image">
                                {" "}
                                <Link to="property_single.html">
                                  <img
                                    src={listing.images[0]}
                                    className="img-fluid"
                                    alt=""
                                  />
                                  <div className="item-badges">
                                    <div className="item-badge-left">
                                      Sponsored
                                    </div>
                                    <div className="item-badge-right">
                                      For Sale
                                    </div>
                                  </div>
                                  <div className="item-meta">
                                    <div className="item-price">
                                      $420,000
                                      <small>$777 / sq m</small>
                                    </div>
                                  </div>
                                </Link>
                                <Link to="#" className="save-item">
                                  <i className="fa fa-star" />
                                </Link>{" "}
                              </div>
                              <Link
                                to="#"
                                className="remove-item"
                                onClick={() => this.handleDelete(listing)}
                              >
                                <i className="fa fa-trash-o" /> Delete
                              </Link>
                            </div>
                            <div className="col-lg-7">
                              <div className="item-info">
                                <h3 className="item-title">
                                  <Link to={`/listings/${listing.id}`}>
                                    {listing.title}
                                  </Link>
                                </h3>
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
                                <div className="item-details">
                                  <ul>
                                    <li>
                                      Sq Ft <span>{listing.squareFeet}</span>
                                    </li>
                                    <li>
                                      Type <span>Villa</span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="added-on">
                                    Listed on 19th Feb 2017{" "}
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <Link to="#" className="added-by">
                                    by John Doe
                                  </Link>
                                </div>
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
      </div>
    );
  }
}

export default Listings;
