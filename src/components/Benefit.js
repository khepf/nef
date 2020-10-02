import React, { Component } from 'react';
import Navbar from './Navbar';
import BenefitSections from './BenefitSections';
import Footer from './Footer';
import '../App.css';

class Benefit extends Component {
  render() {
    return <div className="Benefit">
      
    <Navbar />
    <div className="Covid-Banner">
      <p><b>Unfortunately, due to COVID-19, this year’s benefit has been cancelled.

Thanks to all of our supporters and we wish you health and safety until we meet again in 2021.</b></p>
      
    </div>
    <BenefitSections />
    <Footer /> </div>;
  }
}

export default Benefit;