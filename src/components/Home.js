import React, { Component } from 'react';
import Navbar from './Navbar';
import HomeJumbo from './HomeJumbo';
import HomeSections from './HomeSections';
import Footer from './Footer';
import '../App.css';
import '../bootstrap-social.css';

// All good

class Home extends Component {
  render() {
    return <div className="Home">
    <Navbar /> 
    <div className="Covid-Banner">
      <p><b>Welcome to 2021!! 

Looking forward to seeing everyone at this year’s golf outing on June 5!!</b></p>
      
    </div>
    <HomeJumbo />
    <HomeSections />
    <Footer />
    </div>;

  }
}

export default Home;