import React, { Component } from 'react';
import './SectionDivider.scss';

class SectionDivider extends Component {

  render() {
    return (
      <div className="section-divider">
        <h2 id={this.props.title}>{this.props.title}</h2>
      </div>
    );
  }

}

export default SectionDivider;
