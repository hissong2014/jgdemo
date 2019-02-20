import React, { Component } from 'react';
import './ServiceDescription.scss';
import Fade from 'react-reveal/Fade';
import CircleImage from './CircleImage';


class ServiceDescriptionLeft extends Component {

  render() {

    return (

<Fade left>
        <div className="background-one"></div>
        <div className="main-container">
          <div className="service-container">
            <div className="service-content-container float-left">
            <div className="left-padding center-image-mobile">
              <div className="float-left-service">
                <CircleImage image={this.props.image} white />
              </div>

              <div className="service-text text-padding-left float-left-service">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
              </div>
              <div className="clear"></div>
            </div>
            </div>
            <div className="triangle-left"></div>
            <div className="clear"></div>
          </div>
        </div>
      </Fade>
    );
  }

}

export default ServiceDescriptionLeft
