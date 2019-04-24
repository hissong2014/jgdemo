import React, { Component } from 'react';
import ContactForm from './ContactForm';
import CareerOpportunities from './CareerOpportunities';
import SocialMedia from './SocialMedia';
import SiteMap from './SiteMap';
import ContactInformation from './ContactInformation';
import './Footer.scss';

class Footer extends Component {

  render() {
    return (
      <div className="footer" id="contact-us">
        <div className="main-container footer-container">
          <div className="width-50">
            <ContactForm />
          </div>
          <div className="width-50">
            <CareerOpportunities />
            <ContactInformation />
          </div>
          <div className="clear"></div>
          <div >
            <SocialMedia />

          </div>
          <div className="clear"></div>
          <div className="site-map-margin">
            <SiteMap />

          </div>
          <div className="clear"></div>


        </div>
      </div>
    );
  }

}

export default Footer;
