import React, { Component, Fragment } from 'react';

import '../App.css';
import AboutCards from './AboutCards';

import aboutSection1pic from '../img/aboutSection1pic.jpg';
import { FoundationInfoSection } from './FoundationInfoSection';

class AboutSections extends Component {
  render() {
    return (
      <Fragment>
        <section className="AboutSection1">
          <div className="AboutSection1-1">
            <h3>
              Established in 2005 in honor of Lance Corporal Nicholas Erdy.
            </h3>
            <p className="lead">
              The foundation raises funds for scholarships and contributes to
              organizations that provide much needed aid for our returning
              injured military and their families.
            </p>
          </div>
          <div className="AboutSection1-2">
            <img src={aboutSection1pic} alt="" />
          </div>
        </section>
        <p className="lead">
          NEF has proudly contributed more than $500,000 to the following:
        </p>
        <section className="AboutCardsSection">
          <AboutCards />
        </section>
      <FoundationInfoSection />
      </Fragment>
    );
  }
}

export default AboutSections;
