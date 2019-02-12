import React, { Component } from 'react';
import './CertificateDescription.scss';

class CertificateDescription extends Component {
  state={
    certificates:[
      {
        key:1,
        image:'images/sba-wosb.png',
        title: 'SBA WOSB',
        date: 'Received on: 2/20/2018',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:2,
        image:'images/wbe.png',
        title: 'WBE',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:4,
        image:'images/wbe.png',
        title: 'WBE',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:5,
        image:'images/vosb.png',
        title: 'WBE',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:6,
        image:'images/vosb.png',
        title: 'WBE',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:7,
        image:'images/vosb.png',
        title: 'WBE',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:8,
        image:'images/vosb.png',
        title: 'WBE',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:9,
        image:'images/vosb.png',
        title: 'WBE',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:10,
        image:'images/vosb.png',
        title: 'WBE',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        key:11,
        image:'images/vosb.png',
        title: 'WBE',
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
            <img className="cert" src={certificate.image} alt=""/>
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
