import React, { Component } from "react";

const NotFoundPage = () => {
  return (
    <div id="content">
      <div className="container">
        <div className="row justify-content-md-center">
          <div className="col col-lg-8">
            <div className="error-template text-center">
              {" "}
              <i className="fa fa-exclamation-triangle fa-5x text-danger animated zoomIn mb50" />
              <h3 className="main-title">
                <span>Oops! 404 Not Found</span>
              </h3>
              <div className="main-title-description">
                {" "}
                Sorry, an error has occured, Requested page not found!{" "}
              </div>
              <div className="error-actions">
                {" "}
                <a
                  href="index.html"
                  className="btn btn-primary btn-lg ml-2 mr-2 mb-3"
                >
                  Take Me Home{" "}
                </a>{" "}
                <a
                  href="contact.html"
                  className="btn btn-light btn-lg ml-2 mr-2 mb-3"
                >
                  Contact Support{" "}
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
