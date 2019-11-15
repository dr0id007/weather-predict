import React, { Component } from "react";
import CardView from "../stateless/cardView";
import Carousel from "./carousel";
import WelText from "../stateless/home/welcome";

export default class home extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <WelText />
        <CardView />
      </div>
    );
  }
}
