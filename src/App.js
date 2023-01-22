import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

import About from './components/About';
import Benefit from './components/Benefit';
import Contact from './components/Contact';
import Donate from './components/Donate';
import Golf from './components/Golf';
import Home from './components/Home';

// 2023
class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/benefit' component={Benefit} />
        <Route path='/contact' component={Contact} />
        <Route path='/donate' component={Donate} />
        <Route path='/golf' component={Golf} />{' '}
      </div>
    );
  }
}

export default App;
