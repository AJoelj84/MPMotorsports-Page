import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Footer from './components/pages/Footer';
import './components/assets/fonts.css'

function App() {

  return (
    <Router>
      <div class = ''>
        <h1 className='header'>MP Motorsports <Navigation /></h1>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/About" element={<About/>} />
            <Route path="/Contact" element={<Contact/>} />
            <Route path="/Services" element={<Services/>} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
