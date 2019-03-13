import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchStarWarsRequest,
  fetchStarWarsPlanetsRequest,
  confirmationFetchRequest
} from "./actions/starWars";
import "./App.css";

class App extends Component {
  state = {
    open: false
  };

  handleFetchClick = () => {
    this.props.fetchStarWarsRequest();
    this.setState({ open: true });
  };

  handleConfirmationClick = () => {
    this.props.confirmationFetchRequest();
    this.setState({ open: false });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Redux Saga</h1>
          <div>
            {this.props.people.map((person, i) => (
              <h4 key={i}>{person.name}</h4>
            ))}
          </div>
          <div
            style={!this.state.open ? { display: "none" } : {}}
            className="model"
          >
            <button onClick={this.handleConfirmationClick}>Confirm</button>
          </div>
          <button onClick={this.handleFetchClick}>Load More</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.starWars.people
  };
};

const bindActionsToDispatch = dispatch => ({
  fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
  confirmationFetchRequest: () => dispatch(confirmationFetchRequest())
  // fetchStarWarsPlanetsRequest: () => dispatch(fetchStarWarsPlanetsRequest())
});

export default connect(
  mapStateToProps,
  bindActionsToDispatch
)(App);
