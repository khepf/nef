import React, { Component } from 'react';
import Navbar from './Navbar';
import HomeJumbo from './HomeJumbo';
import HomeSections from './HomeSections';
import Footer from './Footer';
import '../App.css';
import '../bootstrap-social.css';

class Home extends Component {
  render() {
    return <div className="Home">
    <Navbar /> 
    <HomeJumbo />
    <HomeSections />
    <Footer />
    </div>;

  }
}

export default Home;