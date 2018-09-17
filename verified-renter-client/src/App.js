import React, { Component } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import ProfilePage from "./components/profile";
import AccountDelete from "./components/accountDelete";
import ChangePassword from "./components/changePassword";
import BookMarkListing from "./components/bookMarkedListing";
import NotificationPage from "./components/notificationPage";
import PaymentPage from "./components/paymentPage";
import MembershipPage from "./components/membershipPage";
import PropertyGrid from "./components/propertyGrid";
import AboutUsPage from "./components/aboutUsPage";
import AgentList from "./components/agentListPage";
import VerifiedListPage from "./components/verifiedListPage";
import ViewProfilePage from "./components/viewProfilePage";
import NotFoundPage from "./components/notFoundPage";
import RegisterForm from "./components/registerForm";
import LoginForm from "./components/loginForm";
import PropertyForm from "./components/propertyForm";

import Listings from "./components/listings";
import SuccessPage from "./components/successPage";
import Logout from "./components/logout";
import auth from "./services/authService";
import { getMyProfile } from "./services/userService";

class App extends Component {
  state = {};

  async componentDidMount() {
    //const user = auth.getCurrentUser();
    const { data: user } = await getMyProfile();
    console.log(user);
    this.setState({ user });
  }

  render() {
    return (
      <div id="main">
        <ToastContainer />
        <NavBar user={this.state.user} />
        <div className="content">
          <Switch>
            <Route path="/profile" component={ProfilePage} />
            <Route path="/verifiedListPage/:id" component={ViewProfilePage} />
            <Route
              path="/verifiedListPage"
              render={props => <VerifiedListPage {...props} />}
            />
            <Route path="/accountDelete" component={AccountDelete} />
            <Route path="/changePassword" component={ChangePassword} />
            <Route path="/propertyForm" component={PropertyForm} />
            <Route path="/bookMarkListing" component={BookMarkListing} />
            <Route path="/notificationPage" component={NotificationPage} />
            <Route path="/paymentPage" component={PaymentPage} />
            <Route path="/membershipPage" component={MembershipPage} />
            <Route path="/aboutUsPage" component={AboutUsPage} />
            <Route path="/agentListPage" component={AgentList} />
            <Route path="/loginForm" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/notFoundPage" component={NotFoundPage} />
            <Route path="/successPage" component={SuccessPage} />
            <Route path="/registerForm" component={RegisterForm} />
            <Route path="/" exact component={PropertyGrid} />
            <Route path="/listings/:id" component={PropertyForm} />
            <Route path="/listings" component={Listings} />

            <Redirect to="/notFoundPage" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
