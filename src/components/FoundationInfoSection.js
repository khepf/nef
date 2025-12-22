import React from 'react';
import homeSection2pic from '../img/homeSection2pic.jpg';
import '../App.css';

export const FoundationInfoSection =  () => {
    return (
        <section className="Section2">
          <div className="Section2-1">
            <img
              src={homeSection2pic}
              alt="Home Section 2"
              className="HomeSection2pic"
            />
          </div>
          <div className="Section2-2">
            <h3>Foundation Information</h3>
            <p className="lead">Address: 8281 SR 134</p>
            <p className="lead">Lynchburg, OH 45142</p>
            <p className="lead">Phone: (513) 200-5797</p>
            <p className="GoogleFormsDiv lead">
              <a
                href="https://docs.google.com/forms/d/1SvMZjgUEbKHQXzh2dMh5fm3Df_FhCbMN8jVZ7b1dCTY"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Form
              </a>
            </p>
            <p className="lead">501(c)(3) #51-0619676</p>
          </div>
        </section>
    );
}