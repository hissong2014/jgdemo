import React, { Component } from 'react';
import './ServiceDescription.scss';
import Fade from 'react-reveal/Fade';
import CircleImage from './CircleImage';

class ServiceDescriptionRight extends Component {

  render() {

    return (
    <Fade right>
      <div className="background-two"></div>
      <div className="main-container">
        <div className="service-container">
          <div className="service-content-container float-right">
              <div className="right-padding center-image-mobile">
                <div className="float-right-service">
                  <CircleImage image={this.props.image} white/>
                </div>
                <div className="service-text text-padding-right float-right-service">
                  <h2>{this.props.title}</h2>
                  <p>{this.props.description}</p>
                </div>
                <div className="clear"></div>
              </div>
            </div>
            <div className="triangle-right"></div>
            <div className="clear"></div>
          </div>
        </div>
      </Fade>


    );
  }

}

export default ServiceDescriptionRight
