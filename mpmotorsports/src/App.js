import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/pages/Home'
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Services from './components/pages/Services';
import Footer from './components/pages/Footer';

function App() {

  return (
    <Router>
      <div class = 'background'>
        <h1 style={{fontFamily: 'Josefin Sans, sans-serif'}}>MP Motorsports <Navigation /></h1>
          <Routes>
            <Route path="/" element={<Home/>} exact />
            <Route path="/projects" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/resume" element={<Services/>} />
          </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
