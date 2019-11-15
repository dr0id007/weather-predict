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
      state: "select option",
      year: "select option"
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
          <Result props={this.state.data} />
        </div>
      );
    } else {
      return (
        <div className="input">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <h3 className="mt-2">Select State:-</h3>
              </div>
              <div className="col-6">
                <Dropdown
                  state={this.state.state}
                  onSelect={this.onSelectState}
                />
              </div>
              <div className="col-6">
                <h3 className="mt-2">Select year:-</h3>
              </div>
              <Dropdown2 year={this.state.year} onSelect={this.onSelectYear} />
            </div>
            <div className="bottom mt-5">
              <button
                onClick={this.onSubmit}
                className="btn btn-custom"
                to={"/"}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}
