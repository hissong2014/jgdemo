import React, { Component } from 'react';
import './ServiceDescription.scss';
import Fade from 'react-reveal/Fade';

class ServiceDescriptionRight extends Component {

  render() {

    return (
      <Fade right>
      <div className="service-container">
          <div className="service-content-container right-padding float-right">
            <img src="images/service-example.jpg" width="260" height="260" alt="" className="float-right"/>
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
