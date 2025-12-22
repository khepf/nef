import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import HomeJumbo from '../components/HomeJumbo';
import HomeSections from '../components/HomeSections';
import Footer from '../components/Footer';
import '../App.css';
import '../bootstrap-social.css';
import { FoundationInfoSection } from '../components/FoundationInfoSection';

class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <HomeJumbo />
        <HomeSections />
        <FoundationInfoSection />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
