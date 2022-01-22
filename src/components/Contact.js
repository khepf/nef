import React, { Component } from "react";
import Navbar from "./Navbar";
// import TopBanner from "./TopBanner";
import Footer from "./Footer";
import "../App.css";
import "../bootstrap-social.css";
import homeSection1pic from "../img/homeSection1pic.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Navbar />
        {/* <TopBanner /> */}
        <section className="ContactSection1">
          <div className="ContactSection1-1">
            <h3>Contact Us</h3>
            <p className="lead">
              Feel free to reach out to us via email or phone. We will accept
              donations to the silent auction year round and your monetary
              donations via PayPal are always appreciated.
            </p>
            <button type="button" class=" btn btn-facebook">
              <a
                href="https://www.facebook.com/The-Nick-Erdy-Foundation-156253388324978/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-facebook-square fa-2x"></i>Check us out on
                Facebook
              </a>
            </button>
            <h3>Foundation Information</h3>
            <p className="lead">Address: 8281 SR 134</p>
            <p className="lead">Lynchburg, OH 45142</p>
            <p className="lead">Phone: (937) 579-5200</p>
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
          <div className="ContactSection1-2">
            <img
              src={homeSection1pic}
              alt="Home Section 1 pic"
              className="HomeSection1pic"
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
}

export default Contact;
