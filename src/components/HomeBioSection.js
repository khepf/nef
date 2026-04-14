import React from 'react';
import homeSection1pic from '../img/homeSection1pic.jpg';
import '../App.css';

const HomeBioSection =  () => {
    return (
        <section className="Section1">
          <div className="Section1-1">
            <h1>
              Lance Corporal Nicholas Erdy was honored and proud to serve in the
              United States Marine Corps.
            </h1>
            <p className="lead">
              He had dreamed of being in the military all his life and wanted
              nothing more than to be in Iraq where he could help his Marine
              brothers.
            </p>
            <p className="lead">
              On May 11, 2005, Nick gave the greatest sacrifice of all - his
              life. During Operation Matador, Nick was on a mission in the Al
              Anbar Province of Iraq when his Armored Assault Vehicle was hit by
              an I.E.D. He was only 21 years old on the day that he and five
              other Marines were killed in that attack.{' '}
            </p>
            <p className="lead">
              In Nick's memory, his family has created the Nick Erdy Foundation,
              a 501(C)(3) organization dedicated to benefit several scholarship
              funds and not-for-profit groups. Go to the About page to learn
              more on how your contributions have helped to give back.{' '}
            </p>
            <p className="lead">
              It is the goal of this foundation to continue these works for many
              years to come. Through the generosity of so many wonderful people,
              both here at home, and all over the United States, we can continue
              to help others while keeping Nick's memory alive.{' '}
            </p>
          </div>
          <div className="Section1-2">
            <img
              src={homeSection1pic}
              alt="Home Section 1"
              className="HomeSection1pic"
            />
          </div>
        </section>
    );
}

export default HomeBioSection;