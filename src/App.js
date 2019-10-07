import React from 'react';
import './App.css';

import Header from './Components/Header';
import About from './Components/About';
import Work from './Components/Work';
import Contact from './Components/Contact';
import Navbar from './Components/NavBar'

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div className="App-header">
        <Header></Header>
      </div>

      <div className='About'>
        <About></About>
      </div>
      <div className='work'>
        <Work></Work>
      </div>
      <div className='contact'>
        <Contact></Contact>
      </div>
    </div>
  );
}

export default App;
