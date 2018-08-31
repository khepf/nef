import React, { Component, Fragment } from 'react';

import benefit1 from '../img/benefit1.jpg';
import benefit2 from '../img/norlyn.png';
import benefit3 from '../img/spinning.png';
import benefit4 from '../img/texas.png';
import benefit5 from '../img/steiner.png';
import benefit6 from '../img/lima2.jpg';
import homeSection2pic from '../img/homeSection2pic.jpg';

import '../App.css';

class BenefitSections extends Component {
  render() {
    return (
      <Fragment>
        <section className="BenefitSection1">
          <div className="BenefitSection1-1">
            <h3>2018 Annual Benefit</h3>
            <p className="lead">
              Please join us for the 14th Annual Nick Erdy Foundation - Dinner,
              Dance and Auction on Saturday November 17th at Norlyn Manor!
            </p>
            <p className="lead">
              The doors will open at 5:30pm with an open bar followed by a
              silent auction, dinner, dancing, Split-the-Pot, raffles and so
              much more!
            </p>
            <p className="lead">
            Checks can be mailed to address below or payment can now be made via PayPal. PayPal is fast, convenient and you don't need a PayPal account to use this method of payment. Let us know if you have any questions.
            </p>
          </div>
          <div className="BenefitSection1-2">
            <img src={benefit1} alt="" />
          </div>
        </section>
        <section className="BenefitSection2">
          <div className="BenefitSection2-1">
            <h3>Individual Ticket - $60/person</h3>
            <form
              target="paypal"
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              className="formIndividual"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="NJNTJBRYVT84Q"
              />
              <table>
                <tr>
                  <td>
                    <input type="hidden" name="on0" value="Number of Tickets" />
                    Number of Tickets
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name="os0">
                      <option value="1 Person">1 Person $60.00 USD</option>
                      <option value="2 People">2 People $120.00 USD</option>
                      <option value="3 People">3 People $180.00 USD</option>
                      <option value="4 People">4 People $240.00 USD</option>
                      <option value="5 People">5 People $300.00 USD</option>
                      <option value="6 People">6 People $360.00 USD</option>
                      <option value="7 People">7 People $420.00 USD</option>
                    </select>{' '}
                  </td>
                </tr>
              </table>
              <input type="hidden" name="currency_code" value="USD" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </div>
          <div className="BenefitSection2-2">
          <h3>Table Reservation (seats up to 8 ) - $480/table</h3>
          <form align="center" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post" className="formGroup">
          <input type="hidden" name="cmd" value="_s-xclick"/>
          <input type="hidden" name="hosted_button_id" value="DHDD9W34U33XA"/>
          <table>
            <tr>
              <td>
                <input type="hidden" name="on0" value="How Many Tables?"/>How Many Tables?</td>
            </tr>
            <tr>
              <td>
                <select name="os0">
                  <option value="1 Table">1 Table $480.00 USD</option>
                  <option value="2 Tables">2 Tables $960.00 USD</option>
                  <option value="3 Tables">3 Tables $1,440.00 USD</option>
                  <option value="4 Tables">4 Tables $1,920.00 USD</option>
                </select>
              </td>
            </tr>
          </table>
          <input type="hidden" name="currency_code" value="USD"/>
          <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!"/>
          <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1"/>
        </form>
          </div>
        </section>

        <section className="BenefitSection3">
          <div className="BenefitSection3-1">
          <p className="lead">
            "A huge, "Thank You" goes out to all of our donors, sponsors, volunteers and attendees! Without you this night would never be possible!!" 
            </p>
          
          </div>
          <div className="BenefitSection3-2">
            
          <img src={benefit2} alt="" />
          <img src={benefit3} alt="" />
          <img src={benefit4} alt="" />
          <img src={benefit5} alt="" />
            
            
          </div>
        </section>

        <section className="BenefitSection4">
          <div className="BenefitSection4-1">
          <img src={benefit6} alt="" />
            
          </div>
          <div className="BenefitSection4-2">
          <h3>Attention: The memorial will again be on display this year !!</h3>
            <p className="lead">
            The Eyes of Freedom was created as a result of a vision of an Ohio artist, in which she saw the finished memorial and felt she was being asked to create it.
            </p>
            <p className="lead">
            With the help of the families of the fallen and the returned Marines of L3/25, the work was created and unveiled in the Ohio State House Rotunda in 2008, as the vision foretold.
            </p>
            <p className="lead">
            Although the paintings in this Memorial specifically depict the 23 fallen Marines from Lima 3/25, it has become much more: a Remembrance of Spirit and Choice for all who have answered the call of service. 
            </p>
            <p className="lead">
            Behind each portrait we feel the hearts and spirits of the thousands of men and women who have served, fought and died for their country, in every branch of the armed forces. Visit <a href="www.limacompanymemorial.org" target="_blank">Lima Company Memorial</a>  for more info.
            </p>
          </div>
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
            
          <img src={homeSection2pic} alt="Home Section 2 pic" />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default BenefitSections;
