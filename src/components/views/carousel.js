import React, { Component } from "react";
import NewHeader from "../stateless/headers/newHeader";
import Header from "../stateless/headers/header";
import Header2 from "../stateless/headers/header2";
import Header3 from "../stateless/headers/header3";

export default class home extends Component {
  constructor() {
    super();
    this.state = {
      i: 0
    };
  }
  onPrev = e => {
    console.log("onPrev called..");
    const i1 = this.state.i;
    this.setState({
      i: i1 - 1
    });
  };
  onNext = e => {
    console.log("onNext called..");
    const i1 = this.state.i;
    this.setState({
      i: i1 + 1
    });
  };

  render() {
    switch (this.state.i) {
      case 0:
        return <Header onPrev={this.onPrev} onNext={this.onNext} />;
      case 1:
        return <Header2 onPrev={this.onPrev} onNext={this.onNext} />;
      case 2:
        return <Header3 onPrev={this.onPrev} onNext={this.onNext} />;
      default:
        return <div>error...</div>;
    }
  }
}
