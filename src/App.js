import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import AboutPage from './pages/AboutPage';
import BenefitPage from './pages/BenefitPage';
import ContactPage from './pages/ContactPage';
import DonatePage from './pages/DonatePage';
import GolfPage from './pages/GolfPage';
import HomePage from './pages/HomePage';

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
