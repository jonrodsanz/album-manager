import React from "react";

import "./styles/Card.css";

function Card({album}) {
  let { title, price, author, image } = album;
  return (
    <div className="App__card card bg-dark text-white">
      <div className="card-img-top text-center">
        <img
          style={{overflow: 'hidden', height: 200}}
          src={image ? image : "http://bobjames.com/wp-content/themes/soundcheck/images/default-album-artwork.png"}
          alt="Album's Cover"
        />
      </div>
      <div className="card-body">
        <h6 className="card-title">{`${title} ($${price ? price: "Free"})`}</h6>
        <small className="card-text">{author ? author : "Anonymous"}</small>
      </div>
      <div class="btn-group" role="group" aria-label="CRUD operations">
        <button type="button" class="btn btn-secondary">Update</button>
        <button type="button" class="btn btn-danger">Delete</button>
      </div>
    </div>
  );
}

export default Card;
