import React, { Component } from 'react';
import ContactForm from './ContactForm';
import './Footer.scss';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="main-container footer-container">
          <ContactForm />
        </div>
      </div>
    );
  }

}

export default Footer;
