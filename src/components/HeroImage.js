import React, { Component } from 'react';
import './HeroImage.scss'

class HeroImage extends Component {

  render() {
    return (
      <div className="main-container hero-container">
        <p className="hero-text">
          J&G Demolition is a licensed family-owned demolition and hazardous materials remediation contractor, serving commercial and residential clients in Ohio.
        </p>

        <img className="hero-image" width="900" src="images/hero-image-v2.png" alt=""/>
      </div>

    );
  }

}

export default HeroImage;
