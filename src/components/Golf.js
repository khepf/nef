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
      <p><b>A HUGE thank you for all who attended the golf outing.  We had record attendance and sold out two weeks prior to our start date</b></p>
      
    </div>
    <GolfSections />
    <Footer /> </div>;
  }
}

export default Golf;