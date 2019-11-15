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
    const date = [
      "1999",
      "2000",
      "2001",
      "2002",
      "2003",
      "2004",
      "2005",
      "2006",
      "2007",
      "2008",
      "2009",
      "2010",
      "2011",
      "2012",
      "2013",
      "2014",
      "2015"
    ];

    const func = () => {
      const res = [];
      for (var i = 0; i < date.length; i++) {
        res.push(
          <button
            key={date[i]}
            name={date[i]}
            onClick={this.props.onSelect}
            className="dropdown-item drop-menu"
            href="/button"
          >
            {date[i]}
          </button>
        );
      }

      return res;
    };

    return (
      <div className="">
        <div className="dropdown drop-custom">
          <button
            className="btn dropdown-toggle pt-2 pl-4 pr-4 pb-2 btn-custom"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            {this.props.year}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {func()}
          </div>
        </div>
      </div>
    );
  }
}
