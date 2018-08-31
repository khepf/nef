import React, { Component } from 'react';
import Navbar from './Navbar';
import GolfSections from './GolfSections';
import Footer from './Footer';
import '../App.css';

class Golf extends Component {
  render() {
    return <div className="Golf">
    <Navbar />
    <GolfSections />
    <Footer /> </div>;
  }
}

export default Golf;