import React, { Component } from 'react';
import './SocialMedia.scss';

class SocialMedia extends Component {

  render() {
    return (
      <div className="social-media">
        <a href="https://www.facebook.com/pages/J-G-Demolition/164127576947766" rel="noopener noreferrer" target="_blank">
          <img src="images/social-media/fb-icon-white-cropped.png" alt="Facebook Page"/>
        </a>
        <a href="https://www.linkedin.com/in/juanita-weeks-92a73111" rel="noopener noreferrer" target="_blank">
          <img src="images/social-media/linkedin-white-cropped.png" alt="linkedIn Page"/>
        </a>


      </div>
    );
  }

}

export default SocialMedia;
