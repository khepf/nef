import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import AboutSections from '../components/AboutSections';
import Footer from '../components/Footer';
import '../App.css';

class AboutPage extends Component {
  render() {
    return (
      <div className="About">
        <Navbar />
        <AboutSections />
        <Footer />
      </div>
    );
  }
}

export default AboutPage;
