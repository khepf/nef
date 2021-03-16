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
      <p><b>Welcome to 2021!! 

Looking forward to seeing everyone at this year’s golf outing on June 5!!</b></p>
      
    </div>
    <BenefitSections />
    <Footer /> </div>;
  }
}

export default Benefit;