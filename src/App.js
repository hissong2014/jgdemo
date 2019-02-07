import React from 'react';
import TopCertification from './components/TopCertification.js';
import Navigation from './components/Navigation.js';
import HeroImage from './components/HeroImage.js';
import SectionDivider from './components/SectionDivider.js';
import ServiceDescription from './components/ServiceDescription';
import './App.scss';

const App = () =>{
  return(
      <div className="App">
        <TopCertification />
        <Navigation />
        <HeroImage />
        <SectionDivider title="services"/>
        <ServiceDescription
          position="left"
          title="demolition"
          description="You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."
        />
        <ServiceDescription
          position="right"
          title="demolition"
          description="You know when grown-ups tell you 'everything's going to be ne' and you think they're probably lying to make you feel better? You hit me with a cricket bat. I'm the Doctor, I'm worse than everyone's aunt. *catches himself* And that is not how I'm introducing myself."
        />
      </div>
  );
};

export default App;
