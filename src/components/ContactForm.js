import React, { Component } from 'react';
import './ContactForm.scss';

class ContactForm extends Component {

  render() {
    return (
      <div className="contact-form">
        <h2>Contact J&G Demolition</h2>
        <form action="">
          <label htmlFor="email-address">Email Address</label>
          <input type="text" id="email-address" name="email-address"/>

          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name"/>

          <label htmlFor="message">Inquiry</label>
          <textarea name="message" id="message"></textarea>

          <input id="submit" className="submit float-right" name="submit" type="submit" value="SUBMIT"/>
          <div className="clear"></div>
        </form>
      </div>
    );
  }

}

export default ContactForm;
