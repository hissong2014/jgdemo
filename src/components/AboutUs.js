import React, { Component } from 'react';
import Badge from './Badge';
import SectionDivider from './SectionDivider.js';
import './AboutUs.scss';

class AboutUs extends Component {

  render() {
    return (
      <React.Fragment>
        <SectionDivider title="about us" location="about-us"/>
        <div className="main-container">
          <div className="about-us-description">
            <p>
              Our company was established in 2004 and had been responsible for providing outstanding roofing and demolition service ever since. Our regular customers particularly value competitive pricing and timely completion of work.  Over the years, we have gained the confidence of high caliber general contractors and our customers.  J&G Demolition is Insured and Bonded.
            </p>
            <p>
              With 25 plus years of dependable service we have established one of the leading demolition companies in Ohio.  J&G Demolition combines experience, specialized equipment and technical expertise to get the job done safely and professionally.    Our quality employees are the key to our success!  We are proud of J&G Demolitions associates who dedicate themselves to our mission of delivering an exceptional value to our customers.
            </p>
          </div>

          <div className="president">
            <Badge image="images/employees/juanita-weeks.png" name="Juanita Weeks" title="President"/>
          </div>

          <div className="center-employees">
            <div className="employees">
              <Badge image="images/employees/" name="Gary Weeks" title="Co-President" small/>
              <Badge image="images/employees/" name="Cody Weeks" title="Co-President" small/>
              <Badge image="images/employees/shelly-gamble-baker.png" name="Shelley Gamble-Baker" title="Office Manager" small/>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }

}

export default AboutUs;
