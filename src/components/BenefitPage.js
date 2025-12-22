import React, { Component } from 'react';
import Navbar from './Navbar';
import BenefitSections from './BenefitSections';
import Footer from './Footer';
import '../App.css';

class BenefitPage extends Component {
  render() {
    return (
      <div className="Benefit">
        <Navbar />
        <BenefitSections />
        <Footer />
      </div>
    );
  }
}

export default BenefitPage;
