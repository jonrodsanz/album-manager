import React from "react";
import { connect } from "react-redux"

import "./styles/Card.css";

function Card(props) {

  let { id, title, price, author, image } = props.album;
  let src = image ? image: "http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png"
  let displayTitle = `${title} ($${price ? price: "Free"})`
  let displayAuthor = author ? author: "Anonymous"

  return (
    <div className="App__card card bg-dark text-white">
      <div className="card-img-top text-center">
        <img
          style={{overflow: 'hidden', height: 200}}
          src={src}
          alt="Album's Cover"
        />
      </div>
      <div className="card-body">
        <h6 className="card-title">{displayTitle}</h6>
        <small className="card-text">{displayAuthor}</small>
      </div>
      <div className="btn-group" role="group">
        <button type="button" onClick={() => props.dispatch({type:'EDIT_ALBUM', id})} className="btn btn-secondary">Update</button>
        <button type="button" onClick={() => props.dispatch({type:'DELETE_ALBUM', id})} className="btn btn-danger">Sold</button>
      </div>
    </div>
  );
}

export default connect()(Card);
