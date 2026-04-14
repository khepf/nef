import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import HomeJumbo from '../components/HomeJumbo';
import HomeBioSection from '../components/HomeBioSection';
import { FoundationInfoSection } from '../components/FoundationInfoSection';
import Footer from '../components/Footer';
import '../App.css';
import '../bootstrap-social.css';


class HomePage extends Component {
  render() {
    return (
      <div className="Home">
        <Navbar />
        <HomeJumbo />
        <HomeBioSection />
        <FoundationInfoSection />
        <Footer />
      </div>
    );
  }
}

export default HomePage;
