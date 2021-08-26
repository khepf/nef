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
      <p><b>

      A HUGE thank you for all who attended the golf outing.  We had record attendance and sold out two weeks prior to our start date</b></p>
      
    </div>
    <HomeJumbo />
    <HomeSections />
    <Footer />
    </div>;

  }
}

export default Home;