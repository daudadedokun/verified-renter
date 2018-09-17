import React, { Component } from "react";
import SideBar from "./sideBar";
import Form from "./common/form";
import Joi from "joi-browser";
import { getPropertys } from "../services/propertyService";
import { getBedrooms } from "../services/bedroomService";
import { getBathrooms } from "../services/bathroomService";

import {
  getListings,
  saveListing,
  deleteListing,
  getListing
} from "../services/listingService";
import storage from "../utils/imageUploader";
import FeatureItem from "./featureItem";

class PropertyForm extends Form {
  state = {
    data: {
      title: "",
      price: "",
      squareFeet: "",
      location: "",
      propertyId: "",
      bedroomId: "",
      bathroomId: "",
      images: [],
      description: "",
      mlsNo: "",
      address: "",
      city: "",
      state: "",
      country: "",
      Zipcode: ""
    },
    propertys: [],
    bathrooms: [],
    bedrooms: [],
    errors: {}
  };
  schema = {
    id: Joi.string(),
    title: Joi.string()
      .required()
      .label("Property Title"),

    price: Joi.string()
      .required()
      .label("Price"),

    images: Joi.array().items(
      Joi.string()
        .required()
        .label("Images")
    ),

    squareFeet: Joi.string()
      .required()
      .label("Square feet"),

    location: Joi.string()
      .required()
      .label("Location"),

    propertyId: Joi.string()
      .required()
      .label("Property"),

    bedroomId: Joi.string()
      .required()
      .label("Bedroom"),

    bathroomId: Joi.string()
      .required()
      .label("Bathroom"),

    mlsNo: Joi.string()
      .required()
      .label("MLS No"),

    address: Joi.string()
      .required()
      .label("Address"),

    city: Joi.string()
      .required()
      .label("City"),

    state: Joi.string()
      .required()
      .label("State"),

    country: Joi.string()
      .required()
      .label("Country"),

    Zipcode: Joi.string()
      .required()
      .label("Zipcode"),
    description: Joi.string()
      .required()
      .label("Property description is required")
  };

  async populateForeignFields() {
    const { data: propertys } = await getPropertys();
    this.setState({ propertys });
    const { data: bedrooms } = await getBedrooms();
    this.setState({ bedrooms });
    const { data: bathrooms } = await getBathrooms();
    this.setState({ bathrooms });
  }

  async populateListing() {
    try {
      const listingId = this.props.match.params.id;
      if (listingId === "new") return;

      const { data: listing } = await getListing(listingId);
      this.setState({ data: this.mapToViewModel(listing) });
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/notFoundPage");
    }
  }

  async componentDidMount() {
    await this.populateForeignFields();
    await this.populateListing();
  }

  mapToViewModel(listing) {
    return {
      id: listing.id,
      title: listing.title,
      propertyId: listing.property.id,
      bedroomId: listing.bedroom.id,
      bathroomId: listing.bathroom.id,
      price: listing.price,
      location: listing.location,
      city: listing.city,
      state: listing.state,
      Zipcode: listing.zipCode,
      images: listing.images[0],
      squareFeet: listing.squareFeet,
      address: listing.address,
      country: listing.country,
      mlsNo: listing.mlsNo,
      description: listing.propertyDescription
    };
  }

  handleImageUpload = e => {
    const image = e.target.files[0];
    console.log(e.target.files);
    const storageRef = storage.ref(`/listing/${image.name}-${Date.now()}`);
    const uploadTask = storageRef.put(image);

    uploadTask.on(
      "state_changed",
      () => {
        console.log("image upload started!");
      },
      () => {
        console.log("image upload failed");
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          const { images } = this.state.data;

          const newImages = [...images, downloadURL];

          this.setState({
            data: { ...this.state.data, images: newImages }
          });
        });
      }
    );
  };

  doSubmit = async () => {
    console.log(this.state.data);
    await saveListing(this.state.data);

    this.props.history.push("/listings");
  };
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
                    <h1>Submit your property </h1>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <h3 className="subheadline">Basic Details</h3>

                    {this.renderInput(
                      "title",
                      "Property Title",
                      "Property Title"
                    )}
                    {this.renderInput(
                      "price",
                      "Price (IN USD $)",
                      "Price (IN USD $)"
                    )}
                    <div className="row">
                      <div className="col-md-4">
                        {this.renderSelect(
                          "propertyId",
                          "Property",
                          this.state.propertys
                        )}
                      </div>
                      <div className="col-md-4">
                        {this.renderSelect(
                          "bedroomId",
                          "Bedrooms",
                          this.state.bedrooms
                        )}
                      </div>
                      <div className="col-md-4">
                        {this.renderSelect(
                          "bathroomId",
                          "Bathrooms",
                          this.state.bathrooms
                        )}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        {this.renderInput("squareFeet", "Area Sq/ft")}
                      </div>
                      <div className="col-md-6">
                        {this.renderInput("mlsNo", "MLS No.")}
                      </div>
                    </div>
                    <h3 className="subheadline">Location</h3>
                    <div className="row">
                      <div className="col-lg-6">
                        {this.renderInput("location", "Location")}
                      </div>
                      <div className="col-lg-6">
                        {this.renderInput("address", "Address")}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        {this.renderInput("city", "City")}
                      </div>
                      <div className="col-lg-6">
                        {this.renderInput("state", "State")}
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        {this.renderInput("country", "Country")}
                      </div>
                      <div className="col-lg-6">
                        {this.renderInput("Zipcode", "Zipcode")}
                      </div>
                    </div>

                    {this.renderInput(
                      "description",
                      "PropertyDescription",
                      "",
                      "textarea"
                    )}
                    <FeatureItem />
                    <div className="form-group">
                      <h3 className="subheadline">Upload Photos</h3>
                      <div className="ui-dropzone">
                        <div className="icon" />
                        <div>Drag and drop images or click to upload</div>
                        <input
                          type="file"
                          onChange={this.handleImageUpload}
                          className="form-control form-control-lg"
                          id="images"
                          multiple
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <div className="checkbox">
                        <input type="checkbox" id="featured" />
                        <label htmlFor="featured">
                          Yes ‚ feature this listing.{" "}
                        </label>
                      </div>
                    </div>
                    <hr />
                    {this.renderButton("Register")}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PropertyForm;
