import React, { Component } from 'react'
import { connect } from 'react-redux'

import "./styles/Card.css"

class EditComponent extends Component {
  constructor(props){
    super(props);
    this.handleSubmitEditing = this.handleSubmitEditing.bind(this);
  }

  handleSubmitEditing(event){
    event.preventDefault();
    let newTitle = this.getTitle.value;
    let newPrice = this.getPrice.value;
    let newAuthor = this.getAuthor.value;
    let newImage = this.getImage.value;

    let album = {
      newTitle,
      newPrice,
      newAuthor,
      newImage
    }

    this.props.dispatch({ type: 'UPDATE_ALBUM', id: this.props.album.id, album})
    
  }
  render() {
    return (
      <div className="App__card--editing card bg-dark">
      {/* <div className="card-img-top text-center">
      </div> */}
      <form className="card-body d-flex align-content-center flex-wrap" style={{padding: 5}} onSubmit={this.handleSubmitEditing}>
        <div className="form-group">
          <input
            type="text"
            defaultValue={this.props.album.title}
            ref={input => this.getTitle = input}
            placeholder="New Title"
            className="card-title form-control"
            required
          />
          <input
            type="number"
            defaultValue={this.props.album.price}
            min="0"
            step="0.01"
            ref={input => this.getPrice = input}
            placeholder="New Author"
            className="card-title form-control"
            required
          />
          <input
            type="text"
            defaultValue={this.props.album.author}
            ref={input => this.getAuthor = input}
            placeholder="New Price"
            className="card-title form-control"
          />
          <input
            type="text"
            defaultValue={this.props.album.image}
            ref={input => this.getImage = input}
            placeholder="Image URL (optional)"
            className="card-title form-control"
          />
        </div>
        <button type="submit" className="form-control btn-block btn btn-success">Done</button>
      </form>
    </div>
    )
  }
}


export default connect()(EditComponent);