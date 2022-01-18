import React from 'react';
import '../assets/css/base.css';
import NavbarComponent from '../components/NavbarComponent/NavbarComponent';
import WppComponent from '../components/WppComponent/WppComponent';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <WppComponent />
    </div>
  );
}

export default App;
