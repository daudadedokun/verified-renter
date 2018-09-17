import React, { Component } from "react";
import SideBar from "./sideBar";

class BookMarkListing extends Component {
  state = {};
  render() {
    return (
      <div id="content">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12 col-xl-10">
              <div className="row has-sidebar">
                <SideBar />
                <div className="col-md-7 col-lg-8 col-xl-8">
                  <div className="page-header bordered">
                    <h1>Bookmarked Listing</h1>
                  </div>
                  <div className="item-listing list">
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="item-image">
                            {" "}
                            <a href="property_single.html">
                              <img
                                src="/img/demo/property/1.jpg"
                                className="img-fluid"
                                alt=""
                              />
                              <div className="item-badges">
                                <div className="item-badge-left">Sponsored</div>
                                <div className="item-badge-right">For Sale</div>
                              </div>
                              <div className="item-meta">
                                <div className="item-price">
                                  $420,000
                                  <small>$777 / sq m</small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="save-item">
                              <i className="fa fa-star" />
                            </a>{" "}
                          </div>
                          <a href="#" className="remove-item">
                            <i className="fa fa-trash-o" /> Delete
                          </a>
                        </div>
                        <div className="col-lg-7">
                          <div className="item-info">
                            <h3 className="item-title">
                              <a href="property_single.html">
                                3 bed semi-detached house for sale
                              </a>
                            </h3>
                            <div className="item-location">
                              <i className="fa fa-map-marker" /> Kirkstone Road,
                              Middlesbrough TS3
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
                                  Sq Ft <span>730-2600</span>
                                </li>
                                <li>
                                  Type <span>Apartments</span>
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
                              <a href="#" className="added-by">
                                by John Doe
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="item-image">
                            {" "}
                            <a href="property_single.html">
                              <img
                                src="/img/demo/property/2.jpg"
                                className="img-fluid"
                                alt=""
                              />
                              <div className="item-badges">
                                <div className="item-badge-left">Sponsored</div>
                                <div className="item-badge-right">For Sale</div>
                              </div>
                              <div className="item-meta">
                                <div className="item-price">
                                  $420,000
                                  <small>$777 / sq m</small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="save-item">
                              <i className="fa fa-star" />
                            </a>{" "}
                          </div>
                          <a href="#" className="remove-item">
                            <i className="fa fa-trash-o" /> Delete
                          </a>
                        </div>
                        <div className="col-lg-7">
                          <div className="item-info">
                            <h3 className="item-title">
                              <a href="property_single.html">
                                3 bed semi-detached house for sale
                              </a>
                            </h3>
                            <div className="item-location">
                              <i className="fa fa-map-marker" /> Kirkstone Road,
                              Middlesbrough TS3
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
                                  Sq Ft <span>730-2600</span>
                                </li>
                                <li>
                                  Type <span>Apartments</span>
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
                              <a href="#" className="added-by">
                                by John Doe
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="item-image">
                            {" "}
                            <a href="property_single.html">
                              <img
                                src="/img/demo/property/3.jpg"
                                className="img-fluid"
                                alt=""
                              />
                              <div className="item-badges">
                                <div className="item-badge-left">Sponsored</div>
                                <div className="item-badge-right">For Sale</div>
                              </div>
                              <div className="item-meta">
                                <div className="item-price">
                                  $420,000
                                  <small>$777 / sq m</small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="save-item">
                              <i className="fa fa-star" />
                            </a>{" "}
                          </div>
                          <a href="#" className="remove-item">
                            <i className="fa fa-trash-o" /> Delete
                          </a>
                        </div>
                        <div className="col-lg-7">
                          <div className="item-info">
                            <h3 className="item-title">
                              <a href="property_single.html">
                                3 bed semi-detached house for sale
                              </a>
                            </h3>
                            <div className="item-location">
                              <i className="fa fa-map-marker" /> Kirkstone Road,
                              Middlesbrough TS3
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
                                  Sq Ft <span>730-2600</span>
                                </li>
                                <li>
                                  Type <span>Apartments</span>
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
                              <a href="#" className="added-by">
                                by John Doe
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="item-image">
                            {" "}
                            <a href="property_single.html">
                              <img
                                src="/img/demo/property/4.jpg"
                                className="img-fluid"
                                alt=""
                              />
                              <div className="item-badges">
                                <div className="item-badge-left">Sponsored</div>
                                <div className="item-badge-right">For Sale</div>
                              </div>
                              <div className="item-meta">
                                <div className="item-price">
                                  $420,000
                                  <small>$777 / sq m</small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="save-item">
                              <i className="fa fa-star" />
                            </a>{" "}
                          </div>
                          <a href="#" className="remove-item">
                            <i className="fa fa-trash-o" /> Delete
                          </a>
                        </div>
                        <div className="col-lg-7">
                          <div className="item-info">
                            <h3 className="item-title">
                              <a href="property_single.html">
                                3 bed semi-detached house for sale
                              </a>
                            </h3>
                            <div className="item-location">
                              <i className="fa fa-map-marker" /> Kirkstone Road,
                              Middlesbrough TS3
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
                                  Sq Ft <span>730-2600</span>
                                </li>
                                <li>
                                  Type <span>Apartments</span>
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
                              <a href="#" className="added-by">
                                by John Doe
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="item-image">
                            {" "}
                            <a href="property_single.html">
                              <img
                                src="/img/demo/property/5.jpg"
                                className="img-fluid"
                                alt=""
                              />
                              <div className="item-badges">
                                <div className="item-badge-left">Sponsored</div>
                                <div className="item-badge-right">For Sale</div>
                              </div>
                              <div className="item-meta">
                                <div className="item-price">
                                  $420,000
                                  <small>$777 / sq m</small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="save-item">
                              <i className="fa fa-star" />
                            </a>{" "}
                          </div>
                          <a href="#" className="remove-item">
                            <i className="fa fa-trash-o" /> Delete
                          </a>
                        </div>
                        <div className="col-lg-7">
                          <div className="item-info">
                            <h3 className="item-title">
                              <a href="property_single.html">
                                3 bed semi-detached house for sale
                              </a>
                            </h3>
                            <div className="item-location">
                              <i className="fa fa-map-marker" /> Kirkstone Road,
                              Middlesbrough TS3
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
                                  Sq Ft <span>730-2600</span>
                                </li>
                                <li>
                                  Type <span>Apartments</span>
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
                              <a href="#" className="added-by">
                                by John Doe
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div className="row">
                        <div className="col-lg-5">
                          <div className="item-image">
                            {" "}
                            <a href="property_single.html">
                              <img
                                src="/img/demo/property/6.jpg"
                                className="img-fluid"
                                alt=""
                              />
                              <div className="item-badges">
                                <div className="item-badge-left">Sponsored</div>
                                <div className="item-badge-right">For Sale</div>
                              </div>
                              <div className="item-meta">
                                <div className="item-price">
                                  $420,000
                                  <small>$777 / sq m</small>
                                </div>
                              </div>
                            </a>
                            <a href="#" className="save-item">
                              <i className="fa fa-star" />
                            </a>{" "}
                          </div>
                          <a href="#" className="remove-item">
                            <i className="fa fa-trash-o" /> Delete
                          </a>
                        </div>
                        <div className="col-lg-7">
                          <div className="item-info">
                            <h3 className="item-title">
                              <a href="property_single.html">
                                3 bed semi-detached house for sale
                              </a>
                            </h3>
                            <div className="item-location">
                              <i className="fa fa-map-marker" /> Kirkstone Road,
                              Middlesbrough TS3
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
                                  Sq Ft <span>730-2600</span>
                                </li>
                                <li>
                                  Type <span>Apartments</span>
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
                              <a href="#" className="added-by">
                                by John Doe
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
    );
  }
}

export default BookMarkListing;
