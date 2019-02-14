import React, { Component } from 'react';
import './Certificate.scss';

class Certificate extends Component {


  render() {
    return (

          <div className="certificate float-left">
            <div className="image-height">
              <div className="center-image">
                <img className="cert" src={this.props.image} alt=""/>
              </div>

            </div>
            <h2 className="title">{this.props.title}</h2>
            <p className="date">{this.props.date}</p>
            <p className="description">{this.props.description}</p>
          </div>


    );
  }

}

export default Certificate;
