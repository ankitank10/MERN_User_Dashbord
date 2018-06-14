import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import Header from "./Header";


const CountryList = [
  "sydney",
  "melbourne",
  "cromwell",
  "united kingdom"
];
class UserDetails extends Component {
  componentDidMount() {
    this.props.showUserDetails();
  }

  showUserData() {
    switch (this.props.userData) {
      case null:
        return <h3>Loading...</h3>;
      default:
        return (
        <div className="detailsDiv">
        <h4>User details</h4>
          <label>
            Name
            <input
              type ="text"
              name = "userName"
              placeholder ="Enter name.."
              className ="form-control"
              value = {this.props.userData.name}
              readOnly>
            </input>
          </label>
          <br />
          <label>
            Type Of Contract
            <div className ="contractDiv">
            <input 
              type="radio" 
              name="Contract" 
              value="Contract" 
              checked={this.props.userData.contractType === 'Contract'}
              readOnly
            />
          <span>Contract</span>
          <input 
            type="radio" 
            name="Contract" 
            value="Permanent"
            checked={this.props.userData.contractType === 'Permanent'}
            readOnly
          />
          <span>Permanent</span>
          </div>
          </label>
          <br />
          <label>
            Country
            <select name="country" id="country" value = {this.props.userData.country} readOnly>
                <option value={CountryList[0]}>Sydney</option>
                <option value={CountryList[1]}>Melbourne</option>
                <option value={CountryList[2]}>Cromwell</option>
                <option value={CountryList[3]}>United Kingdom</option>
            </select>
          </label>
        </div>

        )
    }
  }
  render() {
    return (
      <div className="user-dashboard">
      <Header />
       
       {this.showUserData()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userData: state.userData
  };
}
export default connect(mapStateToProps, actions)(UserDetails);
