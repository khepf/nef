import React, { Component, Fragment } from 'react';

import golf1 from '../img/golf1.jpg';
import golf2 from '../img/deer-track.png';

import homeSection2pic from '../img/homeSection2pic.jpg';
import golfPDF from '../img/golf2018.pdf';


import '../App.css';

class GolfSections extends Component {
  render() {
    return (
      <Fragment>
        <section className="GolfSection1">
          <div className="GolfSection1-1">
            <h3>14th Annual 2019 Nick Erdy Foundation Golf Outing</h3>
            <p className="lead">
            will be held in June 2019 at Deer Track Golf Course. Registration starts at 11:30 am with a shotgun start at 1 pm. Cost of ticket includes: Greens Fees, Driving Range, Golf Cart, Door Prizes, Drink Ticket and Dinner.
            </p>
            <p className="lead">
            Awards and prizes for 1st place, longest drive, closest to the pin and longest putt.
            </p>
            <p className="lead">
            Checks can be mailed to address below or payment can now be made via PayPal. PayPal is fast, convenient and you don't need a PayPal account to use this method of payment. Let us know if you have any questions.
            </p>
            <p className="lead">
            It is the goal of this foundation to continue these works for many years to come. Through the generosity of so many wonderful people, both here at home, and all over the United States, we can continue to help others while keeping Nick's memory alive.
            </p>
          </div>
          <div className="GolfSection1-2">
            <img src={golf1} alt="Golf 1" className="Golf1pic" />
            <h3>Additional Info</h3>
            <div><img src={golf2} alt=""/></div>
            <div className="DeerTrackTextDiv"><a href={golfPDF} target="_blank">Golf Outing Registration Form</a></div>
            <div className="DeerTrackTextDiv"><a href="https://www.deertrackgolfcourse.com/contactus/" target="_blank" rel="noopener noreferrer">Directions to course</a></div>
            <p>6160 St Route 727</p>
            <p>Goshen, OH 45122</p>
            <p>Tel: 513-625-2500</p>
          </div>
        </section>
        <section className="GolfSection2">
          <div className="GolfSection2-1">
            <h3>Individual Golfer - $100</h3>
            <p class="lead">list team name or other golfers in your group.</p>
            <form align="center" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input name="cmd" type="hidden" value="_s-xclick" /> <input name="hosted_button_id" type="hidden" value="Q2LQN5UESDVP4" /> <input alt="PayPal - The safer, easier way to pay online!" border="0" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" type="image" /> <img alt="" border="0" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" /></form>
          </div>
          <div className="GolfSection2-2">
          <h3>Golf Outing Foursome - $400</h3>
          <p className="lead">make sure to list all 4 golfers on the donate screen.</p>
          <form align="center" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input name="cmd" type="hidden" value="_s-xclick" /> <input name="hosted_button_id" type="hidden" value="TQGQSZ3VKGLCC" /> <input alt="PayPal - The safer, easier way to pay online!" border="0" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" type="image" /> <img alt="" border="0" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" /></form>
          </div>

          <div className="GolfSection2-3">
            <h3>Individual Dinner - $12</h3>
            <p className="lead">reservation without the golf</p>
            <form align="center" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input name="cmd" type="hidden" value="_s-xclick" /> <input name="hosted_button_id" type="hidden" value="C65CPMRPUR9LL" /> <input alt="PayPal - The safer, easier way to pay online!" border="0" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" type="image" /> <img alt="" border="0" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" /></form>
          </div>
          <div className="GolfSection2-4">
          <h3>1 Hole Sponsorship - $100</h3>
          <p className="lead">a fun way to donate</p>
          <form align="center" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top"><input name="cmd" type="hidden" value="_s-xclick" /> <input name="hosted_button_id" type="hidden" value="ZVTVFJNSKM7S2" /> <input alt="PayPal - The safer, easier way to pay online!" border="0" name="submit" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" type="image" /> <img alt="" border="0" height="1" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" /></form>
          </div>
        </section>

        <section className="GolfSection3">
         
        </section>

       
        <section className="AboutSection2">
          <div className="AboutSection2-1">
            <h3>Foundation Information</h3>
            <p className="lead">Address: 8281 SR 134</p>
            <p className="lead">Lynchburg, OH 45142</p>
            <p className="lead">Phone: (937) 579-5200</p>
            <p className="GoogleFormsDiv lead"><a href="https://docs.google.com/forms/d/1SvMZjgUEbKHQXzh2dMh5fm3Df_FhCbMN8jVZ7b1dCTY" target="_blank" rel="noopener noreferrer">Contact Form</a></p>
            <p className="lead">501(c)(3) #51-0619676</p>
          </div>
          <div className="AboutSection2-2">
            
          <img src={homeSection2pic} alt="" />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default GolfSections;
