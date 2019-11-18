import React from "react";
import { NavLink } from "react-router-dom";

const header = props => {
  return (
    <div>
      <header className="header1">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-12 w-100 text-center not-blur">
              <p className="font-weight-light font-head">
                Extreme Climate Prediction
              </p>
              {/* <p className="lead font-text">
                Climate change is happening faster than predicted so let's be
                real ..
              </p> */}
              <NavLink to={"/input"} className="btn btn-custom m-2">
                Flood Prediction
              </NavLink>
              {/* <NavLink to={"/"} className="btn btn-outline m-2 btn-custom">
                Earthquake Prediction
              </NavLink> */}
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
    </div>
  );
};

export default header;
