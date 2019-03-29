import React, { Component } from 'react';
import ServiceDescriptionLeft from './ServiceDescriptionLeft';
import ServiceDescriptionRight from './ServiceDescriptionRight';
import SectionDivider from './SectionDivider.js';
import WorkLocations from './WorkLocations';

class ServiceSection extends Component {

  render() {
    return (
      <div>
        <div className="service-divider">
          <SectionDivider title="services" location="services"/>
        </div>
        <ServiceDescriptionLeft
          image="images/services/demolition.jpg"
          title="demolition"
          description="You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."
        />
        <ServiceDescriptionRight
          image="images/services/roofing.jpg"
          title="roofing"
          description="You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."
        />

        <ServiceDescriptionLeft
          image="images/services/asbestos-removal.jpg"
          title="asbestos removal"
          description="You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."
        />

        <ServiceDescriptionRight
          image="images/services/material-supplier.jpg"
          title="material supplier"
          description="You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."
        />

        <WorkLocations />

      </div>
    );
  }

}

export default ServiceSection;
