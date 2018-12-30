import React, { Component } from "react"
import { connect } from "react-redux"

import Card from "./Card";
import EditComponent from "./EditComponent"

class CardContainer extends Component {
  render() {
    return (
      <div className="Main__cards-container col-md-8 mb-3">
        {this.props.cards.map(component => component.editing ? <EditComponent album={component} key={component.id} /> :<Card key={component.id} album={component} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  }
}
export default connect(mapStateToProps)(CardContainer)