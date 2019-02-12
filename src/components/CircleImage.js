import React, { Component } from 'react';
import './CircleImage.scss';

class CircleImage extends Component {

  render() {
    return (
      <div className={this.props.small ? 'small-image' : 'full-image'}>
        <div className={this.props.white  ? 'circle-container circle-container-white' : 'circle-container circle-container-primary'}>
          <img src={this.props.image} alt=""/>
        </div>
      </div>

    );
  }

}

export default CircleImage;
