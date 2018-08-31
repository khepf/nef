import React, { Component, Fragment } from 'react';


import '../App.css';
import AboutCards from './AboutCards';

import aboutSection1pic from '../img/aboutSection1pic.jpg';
import homeSection2pic from '../img/homeSection2pic.jpg';


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
        <p className="lead">NEF has proudly contributed more than $225,000 to the following:</p>
        <section className="AboutCardsSection">
          <AboutCards />
        </section>
        <section className="AboutSection2">
          <div className="AboutSection2-1">
            <img src={homeSection2pic} alt="" />
          </div>
          <div className="AboutSection2-2">
            <h3>Foundation Information</h3>
            <p className="lead">Address: 8281 SR 134</p>
            <p className="lead">Lynchburg, OH 45142</p>
            <p className="lead">Phone: (937) 579-5200</p>
            <p className="GoogleFormsDiv lead"><a href="https://docs.google.com/forms/d/1SvMZjgUEbKHQXzh2dMh5fm3Df_FhCbMN8jVZ7b1dCTY" target="_blank" rel="noopener noreferrer">Contact Form</a></p>
            <p className="lead">501(c)(3) #51-0619676</p>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default AboutSections;
