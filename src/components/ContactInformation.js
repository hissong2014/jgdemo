import React, { Component } from 'react';
import './ContactInformation.scss';

class ContactInformation extends Component {

  render() {
    return (
      <div className="contact-information">
        <h2>Contact</h2>
        <p>5439 County Road 64</p>
        <p>DeGraff, OH 43318</p>
        <br/>
        <p>Phone: (614) 228-5655</p>
        <p>Fax: (937) 585-6402</p>

      </div>
    );
  }

}

export default ContactInformation;
