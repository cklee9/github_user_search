import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import Following from "./Following/Following";

class Layout extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/home">
          <Home></Home>
        </Route>
        <Route exact path="/following">
          <Following></Following>
        </Route>
      </>
    );
  }
}

export default Layout;
