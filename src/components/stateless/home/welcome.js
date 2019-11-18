import React, { Component } from "react";

export default class welcome extends Component {
  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1 className="pt-5 pb-2">Welcome</h1>
          <hr className="pt-4 hr-s" />
          <p className="mt-0 pt-0">
            Climate change is real. So let's be serious. It is clear from
            research carried out by many climate scientists around the world
            that emissions of greenhouse gases are causing the world to warm,
            and that the resulting changes in climate are likely to have serious
            consequences for future food security, water resources, health and
            biodiversity.
          </p>
        </div>
      </div>
    );
  }
}
