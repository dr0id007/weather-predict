import React, { Component } from "react";

export default class input extends Component {
  state = {
    name: "select option"
  };

  onSelect = e => {
    this.setState({
      name: e.target.name
    });
  };

  render() {
    // const prev_data = [
    //   "ASSAM & MEGHALAYA",
    //   "GANGETIC WEST BENGAL",
    //   "SUB HIMALAYAN WEST BENGAL & SIKKIM",
    //   "ORISSA",
    //   "JHARKHAND",
    //   "BIHAR",
    //   "HARYANA DELHI & CHANDIGARH",
    //   "PUNJAB",
    //   "WEST MADHYA PRADESH",
    //   "EAST MADHYA PRADESH",
    //   "GUJARAT REGION",
    //   "KONKAN & GOA",
    //   "MADHYA MAHARASHTRA",
    //   "COASTAL ANDHRA PRADESH",
    //   "COASTAL KARNATAKA",
    //   "KERALA"
    // ];

    const data = [
      "BIHAR.csv",
      "COASTAL ANDHRA PRADESH",
      "COASTAL KARNATAKA",
      "GANGETIC WEST BENGAL",
      "GUJARAT REGION",
      "HARYANA DELHI & CHANDIGARH",
      "JHARKHAND",
      "KONKAN & GOA",
      "MADHYA MAHARASHTRA",
      "ORISSA",
      "PUNJAB",
      "WEST MADHYA PRADESH"
    ];

    const som = () => {
      const ss = [];
      for (var i = 0; i <= data.length; i++) {
        ss.push(
          <button
            key={i}
            name={data[i]}
            onClick={this.props.onSelect}
            className="dropdown-item drop-menu"
            href="/button"
          >
            {data[i]}
          </button>
        );
      }
      return ss;
    };

    return (
      <div className="">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle pt-2 pl-4 pr-4 pb-2 btn-custom  drop-custom"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.props.state}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {som()}
          </div>
        </div>
      </div>
    );
  }
}
