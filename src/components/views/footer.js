import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class footer extends Component {
  render() {
    return (
      <footer className="page-footer footer font-small blue">
        <footer className="pt-5 pb-4" id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
                <h5 className="mb-4 font-weight-bold">ABOUT US</h5>
                <p className="mb-4">Team Members</p>
                <ul className="f-address">
                  <li>
                    <div className="row">
                      <div className="col-1">
                        {/* <i className="fas fa-map-marker"></i> */}
                      </div>
                      <div className="col-10">
                        <h6 className="font-weight-bold mb-0">
                          Team leader :-
                        </h6>
                        <p>Roshan Mishra</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-1">
                        {/* <i className="far fa-envelope"></i> */}
                      </div>
                      <div className="col-10">
                        <h6 className="font-weight-bold mb-0">Members :-</h6>
                        <p>
                          <a href="/a">Dev Arora</a>
                          <br />
                          <a href="/a">Rahul Goyal</a> <br />
                          <a href="/a">Robin Singh</a>
                          <br />
                        </p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-1">
                        {/* <i className="fas fa-phone-volume"></i> */}
                      </div>
                      <div className="col-10">
                        <h6 className="font-weight-bold mb-0">Institute :-</h6>
                        <p>
                          <a href="/a">
                            Dr. Akhilesh Das Gupta Institute of Technology and
                            Management
                          </a>
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
                <h5 className="mb-4 font-weight-bold">FRESH TWEETS</h5>
                <ul className="f-address">
                  <li>
                    <div className="row">
                      <div className="col-1">
                        <i className="fab fa-twitter"></i>
                      </div>
                      <div className="col-10">
                        <p className="mb-0">
                          <a href="/a">@userthemesrel </a> HTML Version Out Now
                        </p>
                        <label>10 Mins Ago</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-1">
                        <i className="fab fa-twitter"></i>
                      </div>
                      <div className="col-10">
                        <p className="mb-0">
                          <a href="/a">@userthemesrel </a> HTML Version Out Now
                        </p>
                        <label>10 Mins Ago</label>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div className="col-1">
                        <i className="fab fa-twitter"></i>
                      </div>
                      <div className="col-10">
                        <p className="mb-0">
                          <a href="/a">@userthemesrel </a> HTML Version Out Now
                        </p>
                        <label>10 Mins Ago</label>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
                <h5 className="mb-4 font-weight-bold">LATEST UPDATES</h5>
                <ul className="recent-post">
                  <li>
                    <label className="mr-3">
                      28 <br />
                      <span>APR</span>
                    </label>
                    <span>Rendomised words which dont look eveable.</span>
                  </li>
                  <li>
                    <label className="mr-3">
                      29 <br />
                      <span>APR</span>
                    </label>
                    <span>Rendomised words which dont look eveable.</span>
                  </li>
                  <li>
                    <label className="mr-3">
                      30 <br />
                      <span>APR</span>
                    </label>
                    <span>Rendomised words which dont look eveable.</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
                <h5 className="mb-4 font-weight-bold">CONNECT WITH US</h5>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Email Address"
                  />
                  <span className="input-group-addon" id="basic-addon2">
                    <i className="fas fa-check"></i>
                  </span>
                </div>
                <div className="row">
                  <ul className="social-pet mt-4 col-12 d-flex">
                    <li className="m-4">
                      <a href="/a" title="facebook">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </li>
                    <li className="m-4">
                      <a href="/a" title="twitter">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </li>
                    <li className="m-4">
                      <a href="/a" title="google-plus">
                        <i className="fab fa-google-plus-g"></i>
                      </a>
                    </li>
                    <li className="m-4">
                      <a href="/a" title="instagram">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <section className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <div className="pb-5 text-center text-white">
                  &copy; HACK-N-CODY Team Name :- Send_Nodes
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 
        <div className="footer-copyright text-center py-3">
          © 2019 Copyright:
          <NavLink to="/"> domain_url.com</NavLink>
        </div> */}
      </footer>
    );
  }
}
