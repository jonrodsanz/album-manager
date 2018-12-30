import React, {Component} from "react"
import { connect } from "react-redux"

class Form extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event){
    event.preventDefault()
    const title = this.title.value
    const price = this.price.value
    const author = this.author.value
    const image = this.image.value

    const album = {
      id: new Date(),
      title,
      price,
      author,
      image,
      editing: false
    }

    this.props.dispatch({
      type: 'ADD_ALBUM',
      album
    })

    this.title.value = ''
    this.price.value = ''
    this.author.value = ''
    this.image.value = ''
  }

  render(){
    return(
      <form
        autoComplete="off"
        onSubmit={this.handleSubmit}
        className="Main__form bg-dark text-white p-5 col-md-4"
      >
        <div className="form-group">
          <input
            ref = {(input) => this.title = input}
            name="title"
            type="text"
            className="form-control"
            placeholder="Album Title"
            required
          />
        </div>
        <div className="form-group">
          <input
            ref = {(input) => this.price = input}
            step="0.01"
            min="0"
            name="price"
            type="number"
            className="form-control"
            placeholder="Price (USD)"
            required
          />
        </div>
        <div className="form-group">
          <input
            ref = {(input) => this.author = input}
            name="author"
            type="text"
            className="form-control"
            placeholder="Author"
          />
        </div>
        <div className="form-group">
          <input
            ref = {(input) => this.image = input}
            name="image"
            type="text"
            className="form-control"
            placeholder="Image URL (Optional)"
          />
        </div>
        <button type="submit" className="btn btn-success btn-block">
          Put on sale
        </button>
        <p className="d-block text-center mt-3 mb-0">{this.props.cards.length} Albums in the stock</p>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state
  }
}

export default connect(mapStateToProps)(Form)