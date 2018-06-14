import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import LandingPage from './LandingPage';
import UserDetails from './UserDetails';

class App extends Component {
    render() {
      return (
          <BrowserRouter>
            <div className="RouterDiv">
              <Route exact path="/" component={LandingPage} />
              <Route exact path="/userDetails" component={UserDetails} />
            </div>
          </BrowserRouter>
      );
    }
  }
  export default App;
