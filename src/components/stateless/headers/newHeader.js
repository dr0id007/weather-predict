import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class newHeader extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <img
            className="img-custom"
            src={require("../../../assets/earth1.gif")}
            alt="..."
          />
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 text-center w-100">
                <h1 className="font-weight-light">
                  Extreme Weather Prediction
                </h1>
                <p className="lead">
                  Climate change is happening is faster than predicted so let's
                  be real ..
                </p>
                <NavLink to={"/input"} className="btn btn-custom m-2">
                  Flood Prediction
                </NavLink>
                <NavLink to={"/"} className="btn btn-outline m-2 btn-custom">
                  Earthquake Prediction
                </NavLink>
                <i className="p-2 fas fa-arrow-left fa-3x f-custom-l"></i>
                <i className="p-2 fas fa-arrow-right fa-3x f-custom-r"></i>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}
