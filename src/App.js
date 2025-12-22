import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import AboutPage from './components/AboutPage';
import BenefitPage from './components/BenefitPage';
import ContactPage from './components/ContactPage';
import DonatePage from './components/DonatePage';
import GolfPage from './components/GolfPage';
import HomePage from './components/HomePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/benefit" component={BenefitPage} />
        <Route path="/golf" component={GolfPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/donate" component={DonatePage} />
        
      </div>
    );
  }
}

export default App;
