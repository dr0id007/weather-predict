import React, { Component } from "react";
import Header from "./header";
import { NavLink } from "react-router-dom";

export default class carousel extends Component {
  render() {
    return (
      <div className="">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <img
                  className="d-block w-100"
                  src={require("../../assets/flood3.png")}
                  alt="First slide"
                />

                <header className="header">
                  <div className="container h-100">
                    <div className="row h-100">
                      <div className="col-12 text-center">
                        <h1 className="font-weight-light">
                          Extreme Weather Prediction
                        </h1>
                        <p className="lead">
                          Climate change is happening is faster than predicted
                          so let's be real ..
                        </p>
                        <NavLink to={"/input"} className="btn btn-custom m-2">
                          Flood Prediction
                        </NavLink>
                        <NavLink
                          to={"/"}
                          className="btn btn-outline m-2 btn-custom"
                        >
                          Earthquake Prediction
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </header>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="car-img d-block w-100"
                src={require("../../assets/flood2.jpg")}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={require("../../assets/flood3.jpg")}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}
