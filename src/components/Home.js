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
    {/* <div className="Covid-Banner">
      <p><b>Unfortunately, due to COVID-19, this year’s benefit has been cancelled.

Thanks to all of our supporters and we wish you health and safety until we meet again in 2021.</b></p>
      
    </div> */}
    <HomeJumbo />
    <HomeSections />
    <Footer />
    </div>;

  }
}

export default Home;