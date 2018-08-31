import React, { Component, Fragment } from 'react';

import '../App.css';

import homeSection1pic from "../img/homeSection1pic.jpg";
import homeSection2pic from "../img/homeSection2pic.jpg";

class HomeSections extends Component {
  render() {
    return (<Fragment>
      <section className="Section1">
      <div className="Section1-1">
        <h1>Lance Corporal Nicholas Erdy was honored and proud to serve in the United States Marine Corps.</h1>
        <p className="lead">He had dreamed of being in the military all his life and wanted nothing more than to be in Iraq where he could help his Marine brothers.</p>
        <p className="lead">On May 11, 2005, Nick gave the greatest sacrifice of all - his life. During Operation Matador, Nick was on a mission in the Al Anbar Province of Iraq when his Armored Assault Vehicle was hit by an I.E.D. He was only 21 years old on the day that he and five other Marines were killed in that attack. </p>
        <p className="lead">In Nick's memory, his family has created the Nick Erdy Foundation, a 501(C)(3) organization dedicated to benefit several scholarship funds and not-for-profit groups. Go to the About page to learn more on how your contributions have helped to give back. </p>
        <p className="lead">It is the goal of this foundation to continue these works for many years to come. Through the generosity of so many wonderful people, both here at home, and all over the United States, we can continue to help others while keeping Nick's memory alive. </p>
      </div>
    <div className="Section1-2">
<img src={homeSection1pic} alt=""/>
    </div>
    </section>
    <section className="Section2">
    <div className="Section2-1">
<img src={homeSection2pic} alt=""/>
    </div>
    <div className="Section2-2">
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

export default HomeSections;