import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";

class LandingPage extends Component {
  render() {
    return (
      <div className="user-dashboard">
        <Header />
        <a className="button" href="/api/userDetails">Show User Details</a>
      </div>
    );
  }
}
export default LandingPage;
