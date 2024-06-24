import React from 'react';
import HeroSection from './components/HeroSection';
import FundraisingProgress from './components/FundraisingProgress';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <div className="container">
        <FundraisingProgress />
      </div>
    </div>
  );
}

export default App;
