import React, { Component } from 'react';
import './Badge.scss';
import CircleImage from './CircleImage';

class Badge extends Component {

  render() {
    return (
      <div className="badge">
        <CircleImage image={this.props.image} small={this.props.small}/>
        <h2 className={this.props.small ? 'text-small' : 'text-large'}>{this.props.name}</h2>
        <h3>{this.props.title}</h3>
      </div>
    );
  }

}

export default Badge;
