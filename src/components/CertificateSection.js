import React, { Component } from 'react';
import Certificate from './Certificate';
import SectionDivider from './SectionDivider.js';

class CertificateSection extends Component {

  state={
    certificates:[
      {
        keyid:1,
        image:'images/certificates/sba-wosb.png',
        title: 'Woman-Owned Small Business',
        date: 'Received on: 2/20/2018',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        keyid:2,
        image:'images/certificates/wbe.png',
        title: 'Women Business Enterprise',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        keyid:3,
        image:'images/certificates/wbenc.png',
        title: "Women's Business Enterprise National Council",
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        keyid:4,
        image:'images/certificates/vosb.png',
        title: "Veteran-Owned Small Business",
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },


      {
        keyid:5,
        image:'images/certificates/lede.png',
        title: 'Local Economically Disadvantaged Enterprise',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        keyid:6,
        image:'images/certificates/vbe.png',
        title: 'Veteran Business Enterprise',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      },
      {
        keyid:7,
        image:'images/certificates/edge.png',
        title: 'Economic Dividends for Gender Equality',
        date: 'Received on: 3/14/2017',
        description:"You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better?"
      }
    ]
  };

  render() {
    return (
      <div>
        <SectionDivider title="certifications" location="certifications"/>
        <div className="main-container center-block">

          {this.state.certificates.map(certificate =>

              <Certificate
                key={certificate.keyid}
                image={certificate.image}
                title={certificate.title}
                date={certificate.date}
                description={certificate.description}
              />

          )}
          <div className="clear"></div>
        </div>
      </div>
    );
  }

}

export default CertificateSection;
