import React from 'react';
import TopCertification from './components/TopCertification.js';
import Navigation from './components/Navigation.js';
import HeroImage from './components/HeroImage.js';
import SectionDivider from './components/SectionDivider.js';
import ServiceDescriptionLeft from './components/ServiceDescriptionLeft';
import ServiceDescriptionRight from './components/ServiceDescriptionRight';
import WorkLocations from './components/WorkLocations';
import CertificateDescription from './components/CertificateDescription';
import AboutUs from './components/AboutUs';
import './App.scss';

const App = () =>{
  return(
      <div className="App">
        <TopCertification />
        <Navigation />
        <HeroImage />
        <SectionDivider title="services"/>
        <ServiceDescriptionLeft
          image="images/demo-image.jpg"
          title="demolition"
          description="You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."
        />
        <ServiceDescriptionRight
          image="images/IMAGE3.jpg"
          title="roofing"
          description="You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."
        />

        <ServiceDescriptionLeft
          image="images/IMAGE3.jpg"
          title="asbestos removal"
          description="You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."
        />

        <ServiceDescriptionRight
          image="images/IMAGE3.jpg"
          title="material supplier"
          description="You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."
        />

        <WorkLocations />
        <SectionDivider title="certifications"/>
        <CertificateDescription />
        <SectionDivider title="about us" />
        <AboutUs />
      </div>
  );
};

export default App;
