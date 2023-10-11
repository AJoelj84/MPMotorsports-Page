import React from 'react';
import { Link } from 'react-router-dom';
import './assets/fonts.css';

function Navigation() {

  return (
    <div className="navigation" style={{ float: 'right', paddingRight: '40px' }}>
      <Link to="/" className='link' >Home</Link>
      <Link to="/About" className='link' >About</Link>
      <Link to="/Contact" className='link' >Contact</Link>
      <Link to="/Services" className='link' >Services</Link>
    </div>
  );
}

export default Navigation;
