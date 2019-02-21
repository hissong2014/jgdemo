import React, { Component } from 'react';
import './WorkLocations.scss';

class WorkLocations extends Component {

  render() {
    return (
      <div className="main-container work-locations">
        <div className="center">
          <img src="images/work-locations.png" alt="" height="" width="" className="float-left-map"/>
          <p className="text float-left-map">
            You know when grown-ups tell you 'everything's
            going to be ne' and you think
            they're probably lying to make you feel
            better? You hit me with a cricket bat. I'm
            the Doctor, I'm worse than everyone's aunt.
            *catches himself* And that is not how I'm
            introducing myself.
          </p>
          <div className="clear"></div>
        </div>
      </div>
    );
  }

}

export default WorkLocations;
