import React, { Component } from 'react';
import './ServiceDescription.scss';
import Fade from 'react-reveal/Fade';
import CircleImage from './CircleImage';

class ServiceDescriptionRight extends Component {

  render() {

    return (
      <Fade right>
      <div className="service-container">
          <div className="service-content-container right-padding float-right">
          <div className="float-right">
            <CircleImage image={this.props.image} color="white"/>
          </div>
            <div className="service-text text-padding-right float-right">
              <h2>{this.props.title}</h2>
              <p>{this.props.description}</p>
            </div>
            <div className="clear"></div>
          </div>
          <div className="triangle-right"></div>
        <div className="clear"></div>
      </div>
      </Fade>
    );
  }

}

export default ServiceDescriptionRight
