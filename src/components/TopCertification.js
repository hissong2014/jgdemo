import React, {Component} from 'react';
import './TopCertification.scss';

class TopCertification extends Component{
  state = {
    certifications:[
      {key:1,image:"images/sba-wosb-white.png",imageURL:"",altTag:""},
      {key:2,image:"images/wbenc-white.png",imageURL:"",altTag:""},
      {key:3,image:"images/wbe-white.png",imageURL:"",altTag:""},
      {key:4,image:"images/vosb-white.png",imageURL:"",altTag:""},
      {key:5,image:"images/lede-white.png",imageURL:"",altTag:""},
      {key:6,image:"images/vbe-white.png",imageURL:"",altTag:""},
      {key:7,image:"images/vbe-white.png",imageURL:"",altTag:""}
    ]
  };

  render(){
    return(
      <div className="thumb-cert-container">
        <div className="main-container">
          {
            this.state.certifications.map(
              preview => <img src={preview.image} key={preview.key} height="70" className="certPreview" alt={preview.altTag}/>
            )
          }
        </div>
      </div>
    );
  }


}

export default TopCertification;
