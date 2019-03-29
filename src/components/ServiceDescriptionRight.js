import React, { Component } from 'react';
import './ServiceDescription.scss';
import Fade from 'react-reveal/Fade';
import CircleImage from './CircleImage';

class ServiceDescriptionRight extends Component {

  render() {

    return (
      <Fade right>
        <div>
          <div className="description-background float-right-override">
            <div className="description-container float-left-override">
              <div className="description-image">
                <CircleImage image={this.props.image} white />
              </div>
              <div className="description-text float-left-override">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
              </div>
              <div className="clear"></div>
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
