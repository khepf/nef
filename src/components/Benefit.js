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
      <p><b>A HUGE thank you for all who attended the golf outing.  We had record attendance and sold out two weeks prior to our start date.</b></p>
      
    </div>
    <BenefitSections />
    <Footer /> </div>;
  }
}

export default Benefit;