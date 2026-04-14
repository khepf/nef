import React, { Component, Fragment } from 'react';

import benefit3 from '../img/spinning.png';
import benefit5 from '../img/steiner.png';
import benefit6 from '../img/lima2.jpg';
import benefit7 from '../img/meijer.jpg';
import benefit8 from '../img/LMBCLogo.webp';
import benefit9 from '../img/LMBCMain.jpg';
import benefit10 from '../img/benefit10.jpg';
import benefit11 from '../img/benefit11.jpg';

import '../App.css';
import { FoundationInfoSection } from './FoundationInfoSection';

class BenefitSections extends Component {
  // Carousel state and image list at the top
  state = {
    currentImageIndex: 0,
  };

  imageList = [benefit9, benefit10, benefit11];

  prevImage = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        (prevState.currentImageIndex + this.imageList.length - 1) %
        this.imageList.length,
    }));
  };

  nextImage = () => {
    this.setState((prevState) => ({
      currentImageIndex:
        (prevState.currentImageIndex + 1) % this.imageList.length,
    }));
  };

  render() {
    const { currentImageIndex } = this.state;
    const currentImage = this.imageList[currentImageIndex];

    return (
      <Fragment>
        <section className="BenefitSection1">
          <div className="BenefitSection1-2">
            <h3>Annual Benefit</h3>
            <div className="image-carousel">
              <button
                type="button"
                onClick={this.prevImage}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: '24px',
                  cursor: 'pointer',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                tabIndex={0}
                onMouseDown={(e) => e.preventDefault()}
              >
                <span role="img" aria-label="Previous image">
                  ⬅️
                </span>
              </button>
              <img
                src={currentImage}
                alt={`Benefit ${currentImageIndex + 1}`}
                className="Benefit1pic"
              />
              <button
                type="button"
                onClick={this.nextImage}
                style={{
                  border: 'none',
                  background: 'transparent',
                  fontSize: '24px',
                  cursor: 'pointer',
                  outline: 'none',
                  boxShadow: 'none',
                }}
                tabIndex={0}
                onMouseDown={(e) => e.preventDefault()}
              >
                <span role="img" aria-label="Next image">
                  ➡️
                </span>
              </button>
            </div>
            <div className="carousel-indicator">
              {currentImageIndex + 1} / {this.imageList.length}
            </div>
          </div>
          <div className="BenefitSection1-1">
            <p className="lead">WE HAVE SOME BIG NEWS!!</p>
            <p className="lead">WE'RE MOVING!!</p>
            <p className="lead">
              The Nick Erdy Foundation has been truly blessed to celebrate many
              milestones with the Wolfer family at Norlyn Manor. We are
              incredibly grateful for their support over the last 20 years, and
              wish them all the best in their new ventures as they step away
              from the event center. This year will also bring a change in our
              catering partner, Brian Kutcher of Texas Roadhouse. He has been a
              huge part of our success over the last 2 decades and his
              partnership will be truly missed. "Thank you" to both of these
              supporters does not seem nearly enough for all they have done for
              us.
            </p>
            <p className="lead">
              But as they say, when one door closes, another opens! We are so
              excited to partner with{' '}
              <a
                href="https://littlemiamibrewing.com/event-center/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none' }}
              >
                Little Miami Brewing Company
              </a>{' '}
              in Milford for our 21st annual Nick Erdy Foundation Dinner, Dance
              and Auction! It will be held on February 20th, 2027 from
              5:30-10:30pm and we can't wait to begin making new memories here!
              You can expect the same great celebration with an open bar
              followed by live and silent auctions, dinner, dancing,
              Split-the-Pot, raffles and so much more! Continue to check back
              for more updates to this year's event as we navigate this
              transition, and thank you for your continued support of The Nick
              Erdy Foundation!
            </p>
          </div>
        </section>
        {/* https://www.paypal.com/cgi-bin/webscr?cmd=_button-management&flowloggingId=f645170b9b9e7 */}
        <section className="BenefitSection2">
          <div className="BenefitSection2-1">
            <h3>Individual Ticket - $120/person</h3>
            {/* <h5>(price increases to $120/person on November 1st)</h5> */}
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                // value="JMK3F88JP645U"
                value="5LTPXCEWRNELN"
              />
              <table>
                <tr>
                  <td>
                    <input
                      type="hidden"
                      name="on0"
                      value="Number of Attendees"
                    />
                    Number of Attendees
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name="os0">
                      <option value="1 Person">1 Person $120.00 USD</option>
                      <option value="2 People">2 People $240.00 USD</option>
                      <option value="3 People">3 People $360.00 USD</option>
                      <option value="4 People">4 People $480.00 USD</option>
                      <option value="5 People">5 People $600.00 USD</option>
                      <option value="6 People">6 People $720.00 USD</option>
                      <option value="7 People">7 People $840.00 USD</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="hidden" name="on1" value="Attendee Names" />
                    Attendee Names
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="os1" maxLength="200" />
                  </td>
                </tr>
              </table>
              <input type="hidden" name="currency_code" value="USD" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Add to Cart"
              />
            </form>
          </div>
          <div className="BenefitSection2-2">
            <h3>Table Reservation (seats up to 8 ) - $900/table</h3>
            {/* <h5>(price increases to $900/table on November 1st)</h5> */}
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                // value="LJGHBCWK4BJQW"
                value="TJ6PHQ52DWUQW"
              />
              <table>
                <tr>
                  <td>
                    <input type="hidden" name="on0" value="Number of Tables" />
                    Number of Tables
                  </td>
                </tr>
                <tr>
                  <td>
                    <select name="os0">
                      <option value="1 Table">1 Table $900.00 USD</option>
                      <option value="2 Tables">2 Tables $1,800.00 USD</option>
                      <option value="3 Tables">3 Tables $2,700.00 USD</option>
                      <option value="4 Tables">4 Tables $3,600.00 USD</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="hidden" name="on1" value="Attendee Names" />
                    Attendee Names
                  </td>
                </tr>
                <tr>
                  <td>
                    <input type="text" name="os1" maxLength="200" />
                  </td>
                </tr>
              </table>
              <input type="hidden" name="currency_code" value="USD" />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Add to Cart"
              />
            </form>
          </div>
        </section>

        <section className="BenefitSection3">
          <div className="BenefitSection3-1">
            <p className="lead">
              "A huge, "Thank You" goes out to all of our donors, sponsors,
              volunteers and attendees! Without you this night would never be
              possible!!"
            </p>
          </div>
          <div className="BenefitSection3-2">
            {/* <img src={benefit2} alt="" /> */}
            <img src={benefit3} alt="" />
            {/* <img src={benefit4} alt="" /> */}
            <img src={benefit5} alt="" />
            <img src={benefit7} alt="" />
            <img src={benefit8} alt="" />
          </div>
        </section>

        <section className="BenefitSection4">
          <div className="BenefitSection4-1">
            <img src={benefit6} alt="Benefit 6" className="Benefit6pic" />
          </div>
          <div className="BenefitSection4-2">
            <h3>
              Attention: The memorial will again be on display this year !!
            </h3>
            <p className="lead">
              The Eyes of Freedom was created as a result of a vision of an Ohio
              artist, in which she saw the finished memorial and felt she was
              being asked to create it.
            </p>
            <p className="lead">
              With the help of the families of the fallen and the returned
              Marines of L3/25, the work was created and unveiled in the Ohio
              State House Rotunda in 2008, as the vision foretold.
            </p>
            <p className="lead">
              Although the paintings in this Memorial specifically depict the 23
              fallen Marines from Lima 3/25, it has become much more: a
              Remembrance of Spirit and Choice for all who have answered the
              call of service.
            </p>
            <p className="lead">
              Behind each portrait we feel the hearts and spirits of the
              thousands of men and women who have served, fought and died for
              their country, in every branch of the armed forces. Visit{' '}
              <a
                href="https://www.limacompanymemorial.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lima Company Memorial
              </a>{' '}
              for more info.
            </p>
          </div>
        </section>

        <FoundationInfoSection />
      </Fragment>
    );
  }
}

export default BenefitSections;
