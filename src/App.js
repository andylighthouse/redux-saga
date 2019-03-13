import React, { Component } from "react";
import { connect } from "react-redux";

import {
  fetchStarWarsRequest,
  confirmationFetchRequest
} from "./actions/starWars";

import { fetchStarWarsPlanetsRequest } from "./actions/planets";
import "./App.css";

class App extends Component {
  state = {
    open: false
  };

  handleFetchPeopleClick = () => {
    this.props.fetchStarWarsRequest();
    this.setState({ open: true });
  };

  handleConfirmationClick = () => {
    this.props.confirmationFetchRequest();
    this.setState({ open: false });
  };

  handleFetchPlanetsClick = () => {
    this.props.fetchStarWarsPlanetsRequest();
    this.setState({ open: true });
  };
  render() {
    console.log(this.props.planets);
    return (
      <div>
        <div>
          <h1>Redux Saga</h1>
          <div>
            {this.props.people.map((person, i) => (
              <h4 key={i}>{person.name}</h4>
            ))}
          </div>
          <div>
            {this.props.planets.map((plant, i) => (
              <h4 key={i}>{plant.name}</h4>
            ))}
          </div>
          <div
            style={!this.state.open ? { display: "none" } : {}}
            className="model"
          >
            <button onClick={this.handleConfirmationClick}>Confirm</button>
          </div>
          <button onClick={this.handleFetchPeopleClick}>Load people</button>
          <button onClick={this.handleFetchPlanetsClick}>Load planets</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.starWars.people,
    planets: state.planets.planets
  };
};

const bindActionsToDispatch = dispatch => ({
  fetchStarWarsRequest: () => dispatch(fetchStarWarsRequest()),
  confirmationFetchRequest: () => dispatch(confirmationFetchRequest()),
  fetchStarWarsPlanetsRequest: () => dispatch(fetchStarWarsPlanetsRequest())
});

export default connect(
  mapStateToProps,
  bindActionsToDispatch
)(App);
