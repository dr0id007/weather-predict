import React, { Component } from "react";

export default class result extends Component {
  render() {
    console.log(this.props.props.data.data);
    return (
      <div className="input">
        <div className="container">{this.props.props.data.data}</div>
      </div>
    );
  }
}
