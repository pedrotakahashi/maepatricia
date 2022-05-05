import React from 'react';
import '../assets/css/base.css';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import WppComponent from '../components/WppComponent/WppComponent';
import ContentComponent from '../components/Content/ContentComponent';
import FooterComponent from '../components/FooterComponent/FooterComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <WppComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
