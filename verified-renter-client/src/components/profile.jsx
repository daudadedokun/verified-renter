import React, { Component } from "react";
import SideBar from "./sideBar";
import { getMyProfile } from "../services/userService";

class ProfilePage extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      city: "",
      Country: "",
      state: "",
      zipcode: "",
      email: "",
      aboutMe: "",
      location: "",
      address: "",
      fax: ""
    }
  };

  async componentDidMount() {
    const { data: profile } = await getMyProfile();
    this.setState({ data: this.mapToViewModel(profile) });
    console.log(this.mapToViewModel(profile));
  }

  mapToViewModel(profile) {
    return {
      firstName: profile.firstName,
      lastName: profile.lastName,
      phoneNumber: profile.phoneNumber,
      email: profile.email,
      city: profile.city,
      state: profile.state,
      zipcode: profile.zipCode,
      aboutMe: profile.aboutMe,
      location: profile.location,
      fax: profile.fax
    };
  }

  handleChange = e => {};

  handleUpdate = e => {
    e.preventDefault();

    console.log("Submitted");
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
                    <h1>
                      My profile <small>Manage your public profile</small>
                    </h1>
                  </div>
                  <form onUpdate={this.handleUpdate}>
                    <h3 className="subheadline">Basic Information</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            onChange={this.handleChange}
                            value={this.state.data.firstName}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            value={this.state.data.lastName}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Your Email</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        value={this.state.data.email}
                      />
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Phone</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            value={this.state.data.phoneNumber}
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Fax</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            value={this.state.data.fax}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>About Me</label>
                      <textarea
                        className="form-control form-control-lg text-editor"
                        placeholder=""
                      />
                    </div>
                    <h3 className="subheadline">Social Links</h3>
                    <div className="form-group">
                      <label>Twitter</label>
                      <div className="input-group">
                        {" "}
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-fw fa-twitter" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Facebook</label>
                      <div className="input-group">
                        {" "}
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-fw fa-facebook" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Google Plus</label>
                      <div className="input-group">
                        {" "}
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-fw fa-google-plus" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Linkedin</label>
                      <div className="input-group">
                        {" "}
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fa fa-fw fa-linkedin" />
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <h3 className="subheadline">Agent/Company Profile</h3>
                    <div className="form-group">
                      <label>Agent/Company Title</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                      />
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Location</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            id="autocomplete"
                            placeholder="Enter your location"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>City</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            id="locality"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>State</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            id="administrative_area_level_1"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Country</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            id="country"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label>Zipcode</label>
                          <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder=""
                            id="postal_code"
                          />
                        </div>
                      </div>
                    </div>
                    <hr />
                    <div className="form-group action">
                      <button type="submit" className="btn btn-lg btn-primary">
                        Update Profile
                      </button>
                    </div>
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
export default ProfilePage;
