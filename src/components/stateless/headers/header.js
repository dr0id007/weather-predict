import React from "react";
import { NavLink } from "react-router-dom";

const header = props => {
  return (
    <header className="header1">
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 text-center w-100">
            <h1 className="font-weight-light">Extreme Weather Prediction</h1>
            <p className="lead">
              Climate change is happening is faster than predicted so let's be
              real ..
            </p>
            <NavLink to={"/input"} className="btn btn-custom m-2">
              Flood Prediction
            </NavLink>
            <NavLink to={"/"} className="btn btn-outline m-2 btn-custom">
              Earthquake Prediction
            </NavLink>
            <i
              onClick={props.onPrev}
              className="p-2 fas fa-arrow-left fa-3x f-custom-l"
            ></i>
            <i
              onClick={props.onNext}
              className="p-2 fas fa-arrow-right fa-3x f-custom-r"
            ></i>
          </div>
        </div>
      </div>
    </header>
  );
};

export default header;
