import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className='Footer'>
        <footer>
          <p className='FooterP lead'>
            &copy; {new Date().getFullYear()} Nick Erdy Foundation | All Rights
            Reserved
          </p>
        </footer>
      </div>
    );
  }
}

export default Footer;
