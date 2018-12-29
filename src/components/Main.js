import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/Main.css";

import Card from "./Card";
import Form from "./Form"

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row my-3">
          <Form />
          <div className="Main__cards-container col-md-8 mb-3">
            {this.props.cards.map(component => <Card album={component}/>)}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  }
}

export default connect(mapStateToProps)(Main);
