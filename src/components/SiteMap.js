import React, { Component } from 'react';
import './SiteMap.scss';

class SiteMap extends Component {
  state={
    navigation:[
      {
        title:'Home',
        navURL:'#home'
      },
      {
        title:'Services',
        navURL:'#services'
      },
      {
        title:'Certifications',
        navURL:'#certifications'
      },
      {
        title:'About Us',
        navURL:'#about-us'
      },
      {
        title:'Contact Us',
        navURL:'#contact-us'
      }
    ]
  }

  render() {
    return (
      <div>
      {this.state.navigation.map( nav =>
        <a className="site" href={nav.navURL}>{nav.title}</a>
      )}
      </div>
    );
  }

}

export default SiteMap;
