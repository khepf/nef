import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import BenefitSections from '../components/BenefitSections';
import Footer from '../components/Footer';
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
