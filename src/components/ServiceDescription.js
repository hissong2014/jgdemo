import React, { Component } from 'react';
import './ServiceDescription.scss';

class ServiceDescription extends Component {

  render() {
    return (
      <div className="service-container">
          <div className="float-left service-content-container">
            <img src="images/ServiceExample.png" width="260" height="260" alt="" className="float-left"/>
            <div className="float-left service-text">
              <h2>demolition</h2>
              <p>You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself.</p>
            </div>
            <div className="clear"></div>
          </div>
          <div className="triangle float-left"></div>
        <div className="clear"></div>
      </div>
    );
  }

}

export default ServiceDescription
