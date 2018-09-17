import React, { Component } from "react";

class ViewProfilePage extends Component {
  state = {};
  render() {
    return (
      <div id="content">
        <h1>Profile - {this.props.match.params.id}</h1>
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col col-lg-12 col-xl-10">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Agents</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    John Doe
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
        <div id="content">
          <div className="container">
            <div className="row justify-content-md-center">
              <div className="col col-lg-12 col-xl-10">
                <div className="row has-sidebar">
                  <div className="col-md-5 col-lg-4 col-xl-4 col-sidebar">
                    <div id="sidebar" className="sidebar-left">
                      <div className="sidebar_inner">
                        <div className="agent-details mb-5">
                          <div className="text-center">
                            <img
                              className="img-fluid img-rounded agent-thumb"
                              src="/img/demo/profile.jpg"
                              alt=""
                            />
                          </div>
                          <h3 className="subheadline">John Doe</h3>
                          <ul className="list-unstyled">
                            <li>
                              <a href="tel:01502392905">
                                <i
                                  className="fa fa-phone fa-fw"
                                  aria-hidden="true"
                                />{" "}
                                Call: 01502 392905
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i
                                  className="fa fa-globe fa-fw"
                                  aria-hidden="true"
                                />{" "}
                                johnagent.com
                              </a>
                            </li>
                          </ul>
                          <a
                            href="#"
                            className="btn btn-lg btn-primary btn-block"
                            data-toggle="modal"
                            data-target="#leadform"
                          >
                            Contact John
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7 col-lg-8 col-xl-8">
                    <div className="page-header mt-0">
                      <h1>
                        About John Doe{" "}
                        <small>
                          <i className="fa fa-map-marker" /> Kirkstone Road,
                          Middlesbrough TS3
                        </small>
                      </h1>
                    </div>
                    <p>
                      This is about the Agent section, agent himself can add
                      this from his edit profile section. They can write about
                      their experience in RealEstate market.
                    </p>
                    <hr />
                    <div className="lead">Recent properties by John Doe</div>
                    <div className="sorting">
                      <div className="row justify-content-between">
                        <div className="col-sm-5 col-md-5 col-lg-4 col-xl-4">
                          <div className="form-group">
                            <select className="form-control ui-select">
                              <option selected="selected">Most recent</option>
                              <option>Most reduced</option>
                              <option>Most popular</option>
                            </select>
                          </div>
                        </div>
                        <div className="col-sm-6 col-md-5 col-lg-4 col-xl-3">
                          <div className="btn-group float-right" role="group">
                            {" "}
                            <a
                              href="property_grid.html"
                              className="btn btn-light"
                            >
                              <i className="fa fa-th" />
                            </a>{" "}
                            <a
                              href="property_listing.html"
                              className="btn btn-light active"
                            >
                              <i className="fa fa-bars" />
                            </a>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="clearfix" />
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
                              </a>
                              <a href="#" className="save-item">
                                <i className="fa fa-star" />
                              </a>{" "}
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="item-info">
                              <h3 className="item-title">
                                <a href="property_single.html">
                                  3 bed semi-detached house for sale
                                </a>
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
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
                              </a>
                              <a href="#" className="save-item">
                                <i className="fa fa-star" />
                              </a>{" "}
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="item-info">
                              <h3 className="item-title">
                                <a href="property_single.html">
                                  3 bed semi-detached house for sale
                                </a>
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
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
                              </a>
                              <a href="#" className="save-item">
                                <i className="fa fa-star" />
                              </a>{" "}
                            </div>
                          </div>
                          <div className="col-lg-7">
                            <div className="item-info">
                              <h3 className="item-title">
                                <a href="property_single.html">
                                  3 bed semi-detached house for sale
                                </a>
                              </h3>
                              <div className="item-location">
                                <i className="fa fa-map-marker" /> Kirkstone
                                Road, Middlesbrough TS3
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
                            <div class="item-image">
                              {" "}
                              <a href="property_single.html">
                                <img
                                  src="/img/demo/property/4.jpg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <div class="item-badges">
                                  <div class="item-badge-left">Sponsored</div>
                                  <div class="item-badge-right">For Sale</div>
                                </div>
                                <div class="item-meta">
                                  <div class="item-price">
                                    $420,000
                                    <small>$777 / sq m</small>
                                  </div>
                                </div>
                              </a>
                              <a href="#" class="save-item">
                                <i class="fa fa-star" />
                              </a>{" "}
                            </div>
                          </div>
                          <div class="col-lg-7">
                            <div class="item-info">
                              <h3 class="item-title">
                                <a href="property_single.html">
                                  3 bed semi-detached house for sale
                                </a>
                              </h3>
                              <div class="item-location">
                                <i class="fa fa-map-marker" /> Kirkstone Road,
                                Middlesbrough TS3
                              </div>
                              <div class="item-details-i">
                                {" "}
                                <span
                                  class="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i class="fa fa-bed" />
                                </span>{" "}
                                <span
                                  class="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i class="fa fa-bath" />
                                </span>{" "}
                              </div>
                              <div class="item-details">
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
                            <div class="row">
                              <div class="col-md-6">
                                <div class="added-on">
                                  Listed on 19th Feb 2017{" "}
                                </div>
                              </div>
                              <div class="col-md-6">
                                <a href="#" class="added-by">
                                  by John Doe
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="row">
                          <div class="col-lg-5">
                            <div class="item-image">
                              {" "}
                              <a href="property_single.html">
                                <img
                                  src="/img/demo/property/5.jpg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <div class="item-badges">
                                  <div class="item-badge-left">Sponsored</div>
                                  <div class="item-badge-right">For Sale</div>
                                </div>
                                <div class="item-meta">
                                  <div class="item-price">
                                    $420,000
                                    <small>$777 / sq m</small>
                                  </div>
                                </div>
                              </a>
                              <a href="#" class="save-item">
                                <i class="fa fa-star" />
                              </a>{" "}
                            </div>
                          </div>
                          <div class="col-lg-7">
                            <div class="item-info">
                              <h3 class="item-title">
                                <a href="property_single.html">
                                  3 bed semi-detached house for sale
                                </a>
                              </h3>
                              <div class="item-location">
                                <i class="fa fa-map-marker" /> Kirkstone Road,
                                Middlesbrough TS3
                              </div>
                              <div class="item-details-i">
                                {" "}
                                <span
                                  class="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i class="fa fa-bed" />
                                </span>{" "}
                                <span
                                  class="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i class="fa fa-bath" />
                                </span>{" "}
                              </div>
                              <div class="item-details">
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
                            <div class="row">
                              <div class="col-md-6">
                                <div class="added-on">
                                  Listed on 19th Feb 2017{" "}
                                </div>
                              </div>
                              <div class="col-md-6">
                                <a href="#" class="added-by">
                                  by John Doe
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="item">
                        <div class="row">
                          <div class="col-lg-5">
                            <div class="item-image">
                              {" "}
                              <a href="property_single.html">
                                <img
                                  src="/img/demo/property/6.jpg"
                                  class="img-fluid"
                                  alt=""
                                />
                                <div class="item-badges">
                                  <div class="item-badge-left">Sponsored</div>
                                  <div class="item-badge-right">For Sale</div>
                                </div>
                                <div class="item-meta">
                                  <div class="item-price">
                                    $420,000
                                    <small>$777 / sq m</small>
                                  </div>
                                </div>
                              </a>
                              <a href="#" class="save-item">
                                <i class="fa fa-star" />
                              </a>{" "}
                            </div>
                          </div>
                          <div class="col-lg-7">
                            <div class="item-info">
                              <h3 class="item-title">
                                <a href="property_single.html">
                                  3 bed semi-detached house for sale
                                </a>
                              </h3>
                              <div class="item-location">
                                <i class="fa fa-map-marker" /> Kirkstone Road,
                                Middlesbrough TS3
                              </div>
                              <div class="item-details-i">
                                {" "}
                                <span
                                  class="bedrooms"
                                  data-toggle="tooltip"
                                  title="3 Bedrooms"
                                >
                                  3 <i class="fa fa-bed" />
                                </span>{" "}
                                <span
                                  class="bathrooms"
                                  data-toggle="tooltip"
                                  title="2 Bathrooms"
                                >
                                  2 <i class="fa fa-bath" />
                                </span>{" "}
                              </div>
                              <div class="item-details">
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
                            <div class="row">
                              <div class="col-md-6">
                                <div class="added-on">
                                  Listed on 19th Feb 2017{" "}
                                </div>
                              </div>
                              <div class="col-md-6">
                                <a href="#" class="added-by">
                                  by John Doe
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav aria-label="Page navigation">
                      <ul class="pagination">
                        <li class="page-item">
                          <a class="page-link" href="#">
                            &laquo;
                          </a>
                        </li>
                        <li class="page-item active">
                          <a class="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">
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
      </div>
    );
  }
}

export default ViewProfilePage;
