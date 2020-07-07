import React from 'react';
import Logo from './Img/logo.jpg';
import  './style/ytube.css';


function App() {
  return (
    <div className="div1">
      <div>
      <header>
          <h1>YouTube Channel SearchBar </h1>
      </header>
      <div className="Logo">
          <img src={Logo} alt="Youtube channel"/>
      </div>

      </div>   
    </div>
    <div className="div2">
      <div>
        
      </div>
    </div>
  );
}

export default App;
