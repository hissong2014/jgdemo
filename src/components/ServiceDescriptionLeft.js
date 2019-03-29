import React, { Component } from 'react';
import './ServiceDescription.scss';
import Fade from 'react-reveal/Fade';
import CircleImage from './CircleImage';


class ServiceDescriptionLeft extends Component {

  render() {

    return (
      <Fade left>
        <div>
          <div className="description-background">
            <div className="description-container">
              <div className="description-image">
                <CircleImage image={this.props.image} white />
              </div>
              <div className="description-text">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
              </div>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="triangle-left"></div>
          <div className="clear"></div>
        </div>
      </Fade>
    );
  }

}

export default ServiceDescriptionLeft
