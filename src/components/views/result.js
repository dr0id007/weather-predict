import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Graph from "../stateless/graph/graph";
import { graph } from "../api/fetch";

export default class result extends Component {
  constructor() {
    super();
    this.state = {
      graph: false,
      data: []
    };
  }

  onClick = async e => {
    const res = await graph(this.props.props.state, this.props.props.year);
    console.log("result:----", res);
    console.log("onclick");
    this.setState({
      graph: true,
      data: res
    });
  };

  render() {
    console.log("llllll", this.props.props);

    if (this.state.graph === true) {
      return (
        <div className="result">
          <Graph
            state={this.props.props.state}
            year={this.props.props.year}
            data={this.state.data}
          />
        </div>
      );
    } else {
      return (
        <div className="result">
          <div className="container-fluid">
            <div className="font-large">{this.props.props.data.data.data}</div>
            <button
              className="btn btn-custom btn-white mt-5"
              onClick={this.onClick}
            >
              Show Data
            </button>
          </div>
        </div>
      );
    }
  }
}
