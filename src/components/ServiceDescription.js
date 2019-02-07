import React, { Component } from 'react';
import './ServiceDescription.scss';

class ServiceDescription extends Component {

  render() {
    return (
      <div className="service-container">
          <div className={this.props.position ==='left' ? 'service-content-container left-padding float-left' : 'service-content-container float-right right-padding' }>
            <img src="images/service-example.jpg" width="260" height="260" alt="" className={this.props.position ==='left' ? 'float-left' : 'float-right' }/>
            <div className={this.props.position ==='left' ? 'service-text text-padding-left float-left' : 'service-text text-padding-right float-right' }>
              <h2>{this.props.title}</h2>
              <p>{this.props.description}</p>
            </div>
            <div className="clear"></div>
          </div>
          <div className={this.props.position ==='left' ? 'triangle-left' : 'triangle-right' }></div>
        <div className="clear"></div>
      </div>
    );
  }

}

export default ServiceDescription
