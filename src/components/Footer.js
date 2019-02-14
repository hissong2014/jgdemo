import React, { Component } from 'react';
import ContactForm from './ContactForm';
import CareerOpportunities from './CareerOpportunities';
import SocialMedia from './SocialMedia';
import './Footer.scss';

class Footer extends Component {

  render() {
    return (
      <div className="footer">
        <div className="main-container footer-container">
          <div className="width-50">
            <ContactForm />
          </div>
          <div className="width-50 ">
            <CareerOpportunities />

          </div>
          <div className="clear"></div>
          <div className="float-right">
            <SocialMedia />
          </div>
          <div className="clear"></div>


        </div>
      </div>
    );
  }

}

export default Footer;
