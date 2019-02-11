import React, { Component } from 'react';
import './CircleImage.scss';

class CircleImage extends Component {

  render() {

    return (

        <div className={this.props.color === 'primary' ? 'circle-container circle-container-primary' : 'circle-container circle-container-white'}>
          <img src={this.props.image} alt=""/>
        </div>

    );
  }

}

export default CircleImage;
