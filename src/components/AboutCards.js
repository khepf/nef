import React, { Component } from 'react';

import card1 from '../img/stlouis.png';
import card2 from '../img/mcnick.png';
import card3 from '../img/clermont.png';
import card4 from '../img/3d5.png';
import card5 from '../img/midohiomarine.png';
import card6 from '../img/operation2ndchance.png';
import card7 from '../img/lima.png';
import card8 from '../img/foldsofhonor.png';
import card9 from '../img/flightdeckvets.png';
import card10 from '../img/honorflight.png';
import card11 from '../img/cherrybend.png';
import card12 from '../img/taps.png';
import card13 from '../img/always.png';
import card14 from '../img/kinnection.png';

import '../App.css';

class AboutCards extends Component {
  render() {
    return (
      <div className="AboutCardsDiv">
        
        <div class="AboutCard">
          <img src={card1} alt="card1"/>
          <p className="lead">St. Louis School</p>
        </div>
        <div class="AboutCard">
          <img src={card2} alt="card2"/>
          <p className="lead">Archbishop McNicholas High School</p>
        </div>
        <div class="AboutCard">
          <img src={card3} alt="card3"/>
          <p className="lead">Clermont Northeastern Schools</p>
        </div>
        <div class="AboutCard">
          <img src={card4} alt="card4"/>
          <p className="lead">The Three-Deuce-Five Marine Foundation</p>
        </div>
   

     
        <div class="AboutCard">
          <img src={card5} alt="card5"/>
          <p className="lead">The Mid-Ohio Marine Foundation</p>
        </div>
        <div class="AboutCard">
          <img src={card6} alt="card6"/>
          <p className="lead">Operation Second Chance</p>
        </div>
        <div class="AboutCard">
          <img src={card7} alt="card7"/>
          <p className="lead">The Lima Company Memorial</p>
        </div>
        <div class="AboutCard">
          <img src={card8} alt="card8"/>
          <p className="lead">Folds of Honor</p>
        </div>
 

     
        <div class="AboutCard">
          <img src={card9} alt="card9"/>
          <p className="lead">Flight Deck Veterans Group</p>
        </div>
        <div class="AboutCard">
          <img src={card10} alt="card10"/>
          <p className="lead">Honor Flight Program</p>
        </div>
        <div class="AboutCard">
          <img src={card11} alt="card11"/>
          <p className="lead">Operation Cherrybend</p>
        </div>
        <div class="AboutCard">
          <img src={card12} alt="card12"/>
          <p className="lead">T.A.P.S.</p>
        </div>
     

    
        <div class="AboutCard">
          <img src={card13}  alt="card13"/>
          <p className="lead">Always Brothers</p>
        </div>
        <div class="AboutCard">
          <img src={card14}  alt="card14"/>
          <p className="lead">Veteran Kinnection</p>
        </div>
     
      </div>
    );
  }
}

export default AboutCards;
