import React, { Component } from "react";
import { connect } from "react-redux";

import "./styles/Main.css";

import CardContainer from "./CardContainer"
import Form from "./Form"

class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="row my-3">
          <Form />
          <CardContainer />
        </div>
      </div>
    );
  }
}

export default connect()(Main);
