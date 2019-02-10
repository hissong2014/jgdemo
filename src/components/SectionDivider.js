import React, { Component } from 'react';
import './SectionDivider.scss';

class SectionDivider extends Component {

  render() {
    return (
      <div>
      <div id={this.props.title} className="link-fix"></div>
      <br/>


      <div className="section-divider">
        <h2 >{this.props.title}</h2>
      </div>
      </div>
    );
  }

}

export default SectionDivider;
