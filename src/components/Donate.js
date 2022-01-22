import React, { Component } from "react";

import Navbar from "./Navbar";
import TopBanner from "./TopBanner";
import Footer from "./Footer";
import "../App.css";

import homeSection2pic from "../img/homeSection2pic.jpg";
import homeSection3pic from "../img/aboutne.png";

class Donate extends Component {
  render() {
    return (
      <div className="Donate">
        <Navbar />
        {/* <TopBanner /> */}
        <section className="DonateSection1">
          <div className="DonateSection1-1">
            <h3>Donate</h3>
            <p className="lead">
              Feel free to reach out to us via email or phone. We will accept
              donations to the silent auction year round and your monetary
              donations via PayPal are always appreciated. For more information
              about silent auction donations used at our benefit, please go to
              the Benefit page.
            </p>
            <p className="lead">
              All Donations will receive acknowledgement at our benefit dinner
              and as always, all donations are tax deductible as stated by IRS
              code.
            </p>
            <p className="lead">
              The Donate button below will allow monetary donations of any size.
              Thank you for supporting our foundation!
            </p>
            <form
              align="center"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_top"
            >
              <input name="cmd" type="hidden" value="_s-xclick" />{" "}
              <input
                name="hosted_button_id"
                type="hidden"
                value="QFYR35PYBUXJJ"
              />{" "}
              <input
                alt="PayPal - The safer, easier way to pay online!"
                border="0"
                name="submit"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                type="image"
              />{" "}
              <img
                alt=""
                border="0"
                height="1"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
              />
            </form>
          </div>
          <div className="DonateSection1-2">
            <img src={homeSection3pic} alt="" />
          </div>
        </section>

        <section className="Section2">
          <div className="Section2-1">
            <img src={homeSection2pic} alt="" />
          </div>
          <div className="Section2-2">
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
        </section>
        <Footer />
      </div>
    );
  }
}

export default Donate;
