import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import GolfSections from '../components/GolfSections';
import Footer from '../components/Footer';
import '../App.css';

class Golf extends Component {
  render() {
    return (
      <div className="Golf">
        <Navbar />
        <GolfSections />
        <Footer />
      </div>
    );
  }
}

export default Golf;
