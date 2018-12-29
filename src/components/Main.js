import React, { Component } from "react";

// Stylesheet
import "./styles/Main.css";
// Components
import Card from "./Card";
// Data and Classes
import cardsExamples from "../cardsExamples"
import Album from "../AlbumConstructor"

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: cardsExamples
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let cards = this.state.cards;
    let newCard = new Album(this.refs.artForm);
    cards.push(newCard);
    this.setState({ cards });
    // console.log(this.state);
    this.refs.artForm.reset()
  }
  handleChange(event) {
    // let { name, value } = event.target;
  }

  render() {
    return (
      <div className="container">
        <div className="row my-3">
          <div className="Main__cards-container col-md-8 mb-3">
            {this.state.cards.map(component => <Card album={component}/>)}
          </div>
          <form
            autocomplete="off"
            ref="artForm"
            onSubmit={this.handleSubmit}
            className="Main__form bg-dark text-white p-5 col-md-4"
          >
            <div className="form-group">
              <input
                name="title"
                type="text"
                // value={this.state.title}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Album Title"
                required
              />
            </div>
            <div className="form-group">
              <input
                name="price"
                type="number"
                // value={this.state.title}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Price (USD)"
                required
              />
            </div>
            <div className="form-group">
              <input
                name="author"
                type="text"
                // value={this.state.author}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Author"
              />
            </div>
            <div className="form-group">
              <input
                name="image"
                // value={this.state.image}
                onChange={this.handleChange}
                type="text"
                className="form-control"
                placeholder="Image URL (Optional)"
              />
            </div>
            <button type="submit" className="btn btn-success btn-block">
              Create
            </button>
            <p className="d-block text-center mt-3 mb-0">{this.state.cards.length} Albums in the stock</p>
          </form>
        </div>
      </div>
    );
  }
}

export default Main;
