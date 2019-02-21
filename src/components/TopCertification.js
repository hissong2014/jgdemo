import React, {Component} from 'react';
import './TopCertification.scss';

// DEVELOPER NOTE: CERTIFICATE IMAGES SHOULD BE 300x300PX CENTERED VERTICALLY
class TopCertification extends Component{
  state = {
    certifications:[
      {key:1,image:"images/certificate-previews/sba-wosb-white.png",imageURL:"",altTag:""},
      {key:2,image:"images/certificate-previews/wbenc-white.png",imageURL:"",altTag:""},
      {key:3,image:"images/certificate-previews/wbe-white.png",imageURL:"",altTag:""},
      {key:4,image:"images/certificate-previews/vosb-white.png",imageURL:"",altTag:""},
      {key:5,image:"images/certificate-previews/lede-white.png",imageURL:"",altTag:""},
      {key:6,image:"images/certificate-previews/vbe-white.png",imageURL:"",altTag:""},
      {key:7,image:"images/certificate-previews/edge-white.png",imageURL:"",altTag:""}
    ]
  };

  render(){
    return(
      /* TOP CERTIFICATION PREVIEW */ 
      <div className="full-width-background">
        <div className="center-certificate-previews">
          {
            this.state.certifications.map(
              preview =>
                <img
                  src={preview.image}
                  key={preview.key}
                  className="certPreview"
                  alt={preview.altTag}
                />
            )
          }
        </div>
      </div>
    );
  }


}

export default TopCertification;
