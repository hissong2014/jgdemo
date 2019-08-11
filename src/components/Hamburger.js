import React, { Component } from 'react';
import './Hamburger.scss';

class Hamburger extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="hamburger-icon-container">
          <div className="icon-1"></div>
          <div className="icon-2"></div>
          <div className="icon-3"></div>
        </div>
      <div className="clear"></div>
      </React.Fragment>
    );
  }

}

export default Hamburger;
