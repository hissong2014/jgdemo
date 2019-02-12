import React, { Component } from 'react';
import './AboutUs.scss';
import Badge from './Badge';

class AboutUs extends Component {

  render() {
    return (
      <div className="main-container about-us">
        <div className="display-inline-block">
        <div className="float-left">
          <Badge image="images/mom.png" name="Juanita Weeks" title="President"/>
        </div>
        <div className="float-left description">
          <p>
            Our company was established in 2004 and had been responsible for providing outstanding roofing and demolition service ever since. Our regular customers particularly value competitive pricing and timely completion of work.  Over the years, we have gained the confidence of high caliber general contractors and our customers.  J&G Demolition is Insured and Bonded.
          </p>
          <p>
            With 25 plus years of dependable service we have established one of the leading demolition companies in Ohio.  J&G Demolition combines experience, specialized equipment and technical expertise to get the job done safely and professionally.    Our quality employees are the key to our success!  We are proud of J&G Demolitions associates who dedicate themselves to our mission of delivering an exceptional value to our customers.
          </p>
        </div>

        <div className="clear"></div>
        </div>
      </div>
    );
  }

}

export default AboutUs;
