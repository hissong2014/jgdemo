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
        <ServiceDescription />
      </div>
  );
};

export default App;
