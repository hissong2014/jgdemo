import React, { Component } from 'react';
import './CertificateDescription.scss';

class CertificateDescription extends Component {
  state={
    certificates:[
      {
        key:1,
        image:'images/certificates/sba-wosb.png',
        title: 'Woman-Owned Small Business',
        date: 'Received on: 2/20/2018',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:2,
        image:'images/certificates/wbe.png',
        title: 'Women Business Enterprise',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:3,
        image:'images/certificates/wbenc.png',
        title: "Women's Business Enterprise National Council",
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:4,
        image:'images/certificates/vosb.png',
        title: "Veteran-Owned Small Business",
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },


      {
        key:5,
        image:'images/certificates/lede.png',
        title: 'Local Economically Disadvantaged Enterprise',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:6,
        image:'images/certificates/vbe.png',
        title: 'Veteran Business Enterprise',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:7,
        image:'images/certificates/edge.png',
        title: 'Economic Dividends for Gender Equality',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      }
    ]
  };

  render() {
    return (
      <div className="main-container center-block">
        {this.state.certificates.map(certificate =>
          <div key={certificate.key} className="certificate float-left">
            <div className="image-height">
              <div className="center-image">
                <img className="cert" src={certificate.image} alt=""/>
              </div>

            </div>
            <h2 className="title">{certificate.title}</h2>
            <p className="date">{certificate.date}</p>
            <p className="description">{certificate.description}</p>
          </div>
        )}
        <div className="clear"></div>
      </div>
    );
  }

}

export default CertificateDescription;
