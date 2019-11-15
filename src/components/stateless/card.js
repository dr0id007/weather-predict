import React from "react";
import { NavLink } from "react-router-dom";

const card = props => {
  console.log(props.src);
  const ss = props.title;
  return (
    <div className="m-5">
      <div className="card">
        <img src={props.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.text}</p>
          <button
            name={props.title}
            onClick={props.readMore}
            to={"./"}
            className="btn btn-primary"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default card;
