import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HeaderSection from '../headerSection/headerSection';
import SearchSection from '../searchSection/searchSection'
import FooterSection from '../footerSection/footerSection';

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeaderSection/>
        <hr/>
        <SearchSection/>
        <FooterSection/>
      </div>
    </div>
  );
}

export default App;
