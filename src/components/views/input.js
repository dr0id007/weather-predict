import React, { Component } from "react";
import Dropdown from "../stateless/dropdown/dropdown";
import Dropdown2 from "../stateless/dropdown/dropdown2";
import fet from "../api/fetch";
import Result from "./result";

export default class input extends Component {
  constructor() {
    super();
    this.state = {
      result: false,
      data: {},
      state: "What are you looking for?",
      year: "year"
    };
  }
  onSubmit = async e => {
    console.log(this.state.state, this.state.year);
    const res = await fet(this.state.state, this.state.year);
    console.log(res);
    this.setState({
      result: true,
      data: res
    });
  };

  onSelectState = e => {
    this.setState({
      state: [e.target.name]
    });
  };

  onSelectYear = e => {
    this.setState({
      year: [e.target.name]
    });
  };

  render() {
    if (this.state.result === true) {
      return (
        <div>
          <Result props={this.state} />
        </div>
      );
    } else {
      return (
        <div className="input">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 m-5">
                <h1 className="text-center">PREDICT YOUR FLOOD</h1>
              </div>
              <div className="col-12 m-5 line">
                <Dropdown
                  state={this.state.state}
                  onSelect={this.onSelectState}
                />
                {/* <div className="hr-custom"></div> */}
                <Dropdown2
                  year={this.state.year}
                  onSelect={this.onSelectYear}
                />

                {/* <div className="bottom"> */}
                <button
                  onClick={this.onSubmit}
                  className="btn btn-custom btn-white"
                  to={"/"}
                >
                  Next
                </button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
