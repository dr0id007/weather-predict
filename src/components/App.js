import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/home";
import About from "./views/about";
import Contact from "./views/contact";
import Error from "./views/error";
import Navbar from "./views/navbar";
import Footer from "./views/footer";

import Input from "./views/input";

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          {/* <Navbar /> */}
          <Switch>
            <Route path={"/input"} component={Input} />
            <Route path={"/about"} component={About} />
            <Route path={"/contact"} component={Contact} />
            <Route exact path={"/"} component={Home} />
            <Route component={Error} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}
