import React, { Component } from "react";
import Card from "./card";
import news from "../api/news-fetch";

export default class cardView extends Component {
  constructor() {
    super();
    this.state = {
      data: "",
      result: false
    };
  }

  readMore = async e => {
    const res = await news(e.target.name);
    console.log("result:-", res);
    this.setState({
      data: res,
      result: true
    });
    console.log("rr:-", res);
  };

  render() {
    if (this.state.result === true) {
      return <div>this is it..! {this.state.data}</div>;
    }

    return (
      <div className="container-fluid mt-5">
        <div className="row">
          <div className="col col-md-3">
            <Card
              readMore={this.readMore}
              title="Flood"
              text=" Some quick example text to build on the card title and make up the
            bulk of the card's content."
              src={require("../../assets/flood.jpg")}
            />
          </div>
          <div className="col-md-3">
            <Card
              readMore={this.readMore}
              title="Earthquake"
              text=" Some quick example text to build on the card title and make up the
            bulk of the card's content."
              src={require("../../assets/quake1.jpg")}
            />
          </div>
          <div className="col-md-3">
            <Card
              readMore={this.readMore}
              title="Pollution"
              text=" Some quick example text to build on the card title and make up the
            bulk of the card's content."
              src={require("../../assets/pollution1.jpg")}
            />
          </div>
          <div className="col-md-3">
            <Card
              readMore={this.readMore}
              title="Drought"
              text=" Some quick example text to build on the card title and make up the
            bulk of the card's content."
              src={require("../../assets/drought1.jpg")}
            />
          </div>
        </div>
      </div>
    );
  }
}
