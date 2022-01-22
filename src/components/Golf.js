import React, { Component } from "react";
import Navbar from "./Navbar";
import TopBanner from "./TopBanner";
import GolfSections from "./GolfSections";
import Footer from "./Footer";
import "../App.css";

class Golf extends Component {
  render() {
    return (
      <div className="Golf">
        <Navbar />
        {/* <TopBanner /> */}
        <GolfSections />
        <Footer />{" "}
      </div>
    );
  }
}

export default Golf;
