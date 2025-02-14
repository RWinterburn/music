import React from "react";
import "./Card.css";

function Card() {
  return (
    <div className="container">
      <div className="card">
        <h3 className="card-title">Title</h3>
        <div className="card-image">
          <div className="image-placeholder"></div>
        </div>
        <p className="card-text">Hi</p>
      </div>
    </div>
  );
}

export default Card;
