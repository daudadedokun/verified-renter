import React, { Component } from "react";

class PropertyDetail extends Component {
  state = {};
  render() {
    return (
      <div id="content">
        <div class="container">
          <div class="row justify-content-md-center">
            <div class="col col-md-12 col-lg-12 col-xl-10">
              <ol class="breadcrumb">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">Property for sale</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  2 bed semi-detached bungalow
                </li>
              </ol>
              <div class="page-header bordered mb0">
                <div class="row">
                  <div class="col-md-8">
                    {" "}
                    <a href="#" class="btn-return" title="Back">
                      <i class="fa fa-angle-left" />
                    </a>
                    <h1>
                      2 bed semi-detached bungalow{" "}
                      <span class="label label-bordered">For sale</span>{" "}
                      <small>
                        <i class="fa fa-map-marker" /> Kirkstone Road,
                        Middlesbrough TS3
                      </small>
                    </h1>
                  </div>
                  <div class="col-md-4">
                    <div class="price">
                      £250,000 <small>$900/sq ft</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="content" class="item-single">
          <div class="container">
            <div class="row justify-content-md-center">
              <div class="col col-md-12 col-lg-12 col-xl-10">
                <div class="row row justify-content-md-center has-sidebar">
                  <div class="col-md-7 col-lg-8">
                    <div>
                      <div class="item-gallery">
                        <div
                          class="swiper-container gallery-top"
                          data-pswp-uid="1"
                        >
                          <div class="swiper-wrapper lazyload">
                            <div class="swiper-slide">
                              <figure
                                itemprop="associatedMedia"
                                itemscope
                                itemtype="http://schema.org/ImageObject"
                              >
                                {" "}
                                <a
                                  href="img/demo/property/1.jpg"
                                  itemprop="contentUrl"
                                  data-size="2000x1414"
                                >
                                  {" "}
                                  <img
                                    src="/img/demo/property/1.jpg"
                                    class="img-fluid swiper-lazy"
                                    alt="Drawing Room"
                                  />{" "}
                                </a>{" "}
                              </figure>
                            </div>
                            <div class="swiper-slide">
                              <figure
                                itemprop="associatedMedia"
                                itemscope
                                itemtype="http://schema.org/ImageObject"
                              >
                                {" "}
                                <a
                                  href="img/demo/property/2.jpg"
                                  itemprop="contentUrl"
                                  data-size="2000x1414"
                                >
                                  {" "}
                                  <img
                                    data-src="/img/demo/property/2.jpg"
                                    src="img/spacer.png"
                                    class="img-fluid swiper-lazy"
                                    alt="Drawing Room"
                                  />{" "}
                                </a>{" "}
                              </figure>
                            </div>
                            <div class="swiper-slide">
                              <figure
                                itemprop="associatedMedia"
                                itemscope
                                itemtype="http://schema.org/ImageObject"
                              >
                                {" "}
                                <a
                                  href="img/demo/property/3.jpg"
                                  itemprop="contentUrl"
                                  data-size="2000x1414"
                                >
                                  {" "}
                                  <img
                                    data-src="/img/demo/property/3.jpg"
                                    src="img/spacer.png"
                                    class="img-fluid swiper-lazy"
                                    alt="Drawing Room"
                                  />{" "}
                                </a>{" "}
                              </figure>
                            </div>
                            <div class="swiper-slide">
                              <figure
                                itemprop="associatedMedia"
                                itemscope
                                itemtype="http://schema.org/ImageObject"
                              >
                                {" "}
                                <a
                                  href="img/demo/property/4.jpg"
                                  itemprop="contentUrl"
                                  data-size="2000x1414"
                                >
                                  {" "}
                                  <img
                                    data-src="/img/demo/property/4.jpg"
                                    src="img/spacer.png"
                                    class="img-fluid swiper-lazy"
                                    alt="Drawing Room"
                                  />{" "}
                                </a>{" "}
                              </figure>
                            </div>
                            <div class="swiper-slide">
                              <figure
                                itemprop="associatedMedia"
                                itemscope
                                itemtype="http://schema.org/ImageObject"
                              >
                                {" "}
                                <a
                                  href="img/demo/property/5.jpg"
                                  itemprop="contentUrl"
                                  data-size="2000x1414"
                                >
                                  {" "}
                                  <img
                                    data-src="/img/demo/property/5.jpg"
                                    src="img/spacer.png"
                                    class="img-fluid swiper-lazy"
                                    alt="Drawing Room"
                                  />{" "}
                                </a>{" "}
                              </figure>
                            </div>
                          </div>
                          <div class="swiper-button-next" />
                          <div class="swiper-button-prev" />
                        </div>
                        <div class="swiper-container gallery-thumbs">
                          <div class="swiper-wrapper">
                            <div class="swiper-slide">
                              <img
                                src="/img/demo/property/thumb/1.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="/img/demo/property/thumb/2.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="/img/demo/property/thumb/3.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="/img/demo/property/thumb/4.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="/img/demo/property/thumb/5.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="/img/demo/property/thumb/6.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="/img/demo/property/thumb/7.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="/img/demo/property/thumb/8.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                            <div class="swiper-slide">
                              <img
                                src="/img/demo/property/thumb/9.jpg"
                                class="img-fluid"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <ul class="item-features">
                          <li>
                            <span>540</span> sq m{" "}
                          </li>
                          <li>
                            <span>3</span> Rooms{" "}
                          </li>
                          <li>
                            <span>1</span> Bedrooms{" "}
                          </li>
                          <li>
                            <span>2</span> Bathrooms{" "}
                          </li>
                        </ul>
                        <div class="item-description">
                          <h3 class="headline">Property description</h3>
                          <p>
                            <strong>Hall</strong>
                             <strong>entrance</strong>
                             UPVC double glazed door to the front, laminate
                            flooring, storage cupboard, loft access and under
                            floor heating.
                          </p>
                          <p>
                            <strong>Lounge/diner/kitchen</strong>
                             <strong>24' 6" x 16' 0" (7.47m x 4.88m)</strong>
                             Spacious L shape open plan living, UPVC double
                            glazed window and bi-folding doors to the rear,
                            laminate flooring, television and telephone
                            connection points, power sockets and under floor
                            heating.
                          </p>
                          <p>
                            Fitted kitchen with wall and base cupboards,
                            integrated Bosch electric hob and oven, cooker hood,
                            lamona inset sink and drainer, mosaic style splash
                            back tiling, integrated Bosch washing machine and
                            dishwasher, integrated Bosch fridge freezer and
                            power sockets.
                          </p>
                          <p>
                            <strong>Bedroom</strong>
                             <strong>one</strong>
                             <strong>10' 08" x 10' 04" (3.25m x 3.15m)</strong>
                             UPVC double glazed window to the front, television
                            connection point, power sockets and under floor
                            heating.
                          </p>
                          <p>
                            <strong>Bedroom</strong>
                             <strong>two</strong>
                             <strong>9' 05" x 9' 0" (2.87m x 2.74m)</strong>
                             UPVC double glazed window to the front, television
                            connection point, power sockets and under floor
                            heating.
                          </p>
                          <p>
                            <strong>Bathroom</strong>
                             <strong>8' 08" x 6' 08" (2.64m x 2.03m)</strong>
                             UPVC double glazed window to the side, tiled
                            flooring, L shaped bath with fitted shower over
                            head, wash hand basin, WC, extractor fan, tiled
                            surrounds and under floor heating.
                          </p>
                          <p>
                            <strong>Outside</strong>
                             <strong>areas</strong>
                             Front - large driveway with space for multiple
                            vehicles.
                          </p>
                          <p>
                            Rear - Large fully enclosed garden laid to lawn with
                            patio around the property and side access.
                          </p>
                        </div>
                        <h3 class="headline">Property Details</h3>
                        <ul class="checked_list feature-list">
                          <li>
                            <strong>Building Age:</strong> 2 Years
                          </li>
                          <li>
                            <strong>Parking:</strong> Attached Garage
                          </li>
                          <li>
                            <strong>Cooling:</strong> Central Cooling
                          </li>
                          <li>
                            <strong>Heating:</strong> Forced Air, Gas
                          </li>
                          <li>
                            <strong>Sewer:</strong> Public/City
                          </li>
                          <li>
                            <strong>Water:</strong> City
                          </li>
                        </ul>
                        <h3 class="headline">Property Features</h3>
                        <ul class="checked_list feature-list">
                          <li>Alarm</li>
                          <li>Gym</li>
                          <li>Internet</li>
                          <li>Swimming Pool</li>
                          <li>Window Covering</li>
                        </ul>
                        <div class="item-navigation">
                          <ul class="nav nav-tabs v2" role="tablist">
                            <li role="presentation">
                              <a
                                href="#map"
                                aria-controls="map"
                                role="tab"
                                data-toggle="tab"
                                class="active"
                              >
                                <i class="fa fa-map" />{" "}
                                <span class="hidden-xs">Map &amp; nearby</span>
                              </a>
                            </li>
                            <li role="presentation">
                              <a
                                href="#streetview"
                                aria-controls="streetview"
                                role="tab"
                                data-toggle="tab"
                              >
                                <i class="fa fa-road" />{" "}
                                <span class="hidden-xs">Street View</span>
                              </a>
                            </li>
                          </ul>
                          <div class="tab-content">
                            <div
                              role="tabpanel"
                              class="tab-pane active"
                              id="map"
                            >
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1215.7401235613713!2d1.4497354260471211!3d52.45232942952154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9f169c5a088db%3A0x75a6abde48cc5adc!2sKents+Ln%2C+Bungay+NR35+1JF%2C+UK!5e0!3m2!1sen!2sin!4v1489862715790"
                                width="600"
                                height="450"
                                style="border:0;"
                                allowfullscreen
                              />
                            </div>
                            <div
                              role="tabpanel"
                              class="tab-pane"
                              id="streetview"
                            >
                              <iframe
                                src="https://www.google.com/maps/embed?pb=!1m0!3m2!1sen!2s!4v1489861898447!6m8!1m7!1sGz9bS-GXSJE28jHD19m7KQ!2m2!1d52.45191646727986!2d1.451480542718656!3f0!4f0!5f0.8160813932612223"
                                width="600"
                                height="450"
                                style="border:0"
                                allowfullscreen
                              />
                            </div>
                          </div>
                        </div>
                        <div class="item-attachments">
                          <h3 class="headline">Download Documents</h3>
                          <a href="#" class="btn btn-lg btn-inverse">
                            <i
                              class="fa fa-cloud-download"
                              aria-hidden="true"
                            />{" "}
                            Brochure
                          </a>{" "}
                          <a href="#" class="btn btn-lg btn-inverse">
                            <i
                              class="fa fa-cloud-download"
                              aria-hidden="true"
                            />{" "}
                            Floor Plan
                          </a>{" "}
                          <a href="#" class="btn  btn-lg btn-inverse">
                            <i
                              class="fa fa-cloud-download"
                              aria-hidden="true"
                            />{" "}
                            Layout Plan
                          </a>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5 col-lg-4">
                    <div id="sidebar" class="sidebar-right">
                      <div class="sidebar_inner">
                        <div id="feature-list" role="tablist">
                          <div class="card">
                            <div class="card-header" role="tab" id="headingOne">
                              <h4 class="panel-title">
                                {" "}
                                <a
                                  role="button"
                                  data-toggle="collapse"
                                  href="#specification"
                                  aria-expanded="true"
                                  aria-controls="specification"
                                >
                                  {" "}
                                  Specifications{" "}
                                  <i class="fa fa-caret-down float-right" />{" "}
                                </a>{" "}
                              </h4>
                            </div>
                            <div
                              id="specification"
                              class="panel-collapse collapse show"
                              role="tabpanel"
                            >
                              <div class="card-body">
                                <table class="table v1">
                                  <tr>
                                    <td>Bedrooms</td>
                                    <td>3</td>
                                  </tr>
                                  <tr>
                                    <td>Bathrooms</td>
                                    <td>2</td>
                                  </tr>
                                  <tr>
                                    <td>Covered area</td>
                                    <td>4590 sqft</td>
                                  </tr>
                                  <tr>
                                    <td>Total Area</td>
                                    <td>5600 sqft</td>
                                  </tr>
                                  <tr>
                                    <td>Floor</td>
                                    <td>Ground Floor</td>
                                  </tr>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="card shadow">
                          <h5 class="subheadline mt-0  mb-0">
                            For Sale by Agent
                          </h5>
                          <div class="media">
                            <div class="media-left">
                              {" "}
                              <a href="agent.html">
                                {" "}
                                <img
                                  class="media-object rounded-circle"
                                  src="/img/demo/profile.jpg"
                                  width="64"
                                  height="64"
                                  alt=""
                                />{" "}
                              </a>{" "}
                            </div>
                            <div class="media-body">
                              <h4 class="media-heading">
                                <a href="agent.html">John Doe</a>
                              </h4>
                              <p>
                                <a href="tel:01502392905">
                                  <i class="fa fa-phone" aria-hidden="true" />{" "}
                                  Call: 01502 392905
                                </a>
                              </p>
                              <p>
                                <a
                                  href="agent.html"
                                  class="btn btn-sm btn-light"
                                >
                                  View Profile
                                </a>
                              </p>
                            </div>
                          </div>
                          <a
                            href="#"
                            class="btn btn-lg btn-primary btn-block"
                            data-toggle="modal"
                            data-target="#leadform"
                          >
                            Request Details
                          </a>{" "}
                        </div>
                        <div class="btn-group btn-group-justified" role="group">
                          {" "}
                          <a
                            href="#"
                            class="btn btn-light"
                            data-toggle="tooltip"
                            title="Save to favorites"
                          >
                            <i class="fa fa-star" aria-hidden="true" />
                          </a>{" "}
                          <a
                            href="#"
                            class="btn btn-light"
                            data-toggle="tooltip"
                            title="Print this page"
                          >
                            <i class="fa fa-print" aria-hidden="true" />
                          </a>{" "}
                          <a
                            href="#"
                            class="btn btn-light"
                            data-toggle="modal"
                            data-target="#email-to-friend"
                          >
                            <span data-toggle="tooltip" title="Email to Friend">
                              <i class="fa fa-envelope-o" aria-hidden="true" />
                            </span>
                          </a>{" "}
                          <a
                            href="#"
                            class="btn btn-light"
                            data-toggle="modal"
                            data-target="#report-listing"
                          >
                            <span data-toggle="tooltip" title="Report Listing">
                              <i
                                class="fa fa-exclamation-circle"
                                aria-hidden="true"
                              />
                            </span>
                          </a>{" "}
                        </div>
                      </div>
                    </div>
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

export default PropertyDetail;
