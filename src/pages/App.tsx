import React from 'react';
import '../assets/css/base.css';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import WppComponent from '../components/WppComponent/WppComponent';
import ContentComponent from '../components/Content/ContentComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <WppComponent />
      <ContentComponent />
    </div>
  );
}

export default App;
