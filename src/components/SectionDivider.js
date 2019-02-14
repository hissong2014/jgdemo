import React, { Component } from 'react';
import './SectionDivider.scss';

class SectionDivider extends Component {

  render() {
    return (
      <div className="section-divider position-relative" >
        <div name={this.props.location} id={this.props.location} className="anchor-style"></div>
        <h2 >{this.props.title}</h2>
      </div>

    );
  }

}

export default SectionDivider;
