import React from 'react';
import TopCertification from './components/TopCertification.js';
import Navigation from './components/Navigation.js';
import HeroImage from './components/HeroImage.js';
import ServiceSection from './components/ServiceSection';
//import CertificateSection from './components/CertificateSection';
//import AboutUs from './components/AboutUs';
//import Footer from './components/Footer';
import './App.scss';





const App = () =>{
  return(
      <div className="App">
        <TopCertification />
      <Navigation />
         <HeroImage />
        <ServiceSection />
        {/*<CertificateSection />
        <AboutUs />
        <Footer />*/}
      </div>
  );
};

export default App;
