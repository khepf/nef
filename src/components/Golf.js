import React, { Component } from 'react';
import Navbar from './Navbar';
import GolfSections from './GolfSections';
import Footer from './Footer';
import '../App.css';

class Golf extends Component {
  render() {
    return <div className="Golf">
    <Navbar />
    <div className="Covid-Banner">
      <p><b>We are sold out! Thank you everyone for such a great response to this year's event!</b></p>
      
    </div>
    <GolfSections />
    <Footer /> </div>;
  }
}

export default Golf;