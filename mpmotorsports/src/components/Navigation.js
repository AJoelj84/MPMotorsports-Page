import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './assets/fonts.css';

function Navigation() {
  return (
    <Dropdown class= 'dropdown' style={{ float: 'right', paddingRight: '40px' }}>
      <Dropdown.Toggle variant="primary" id="dropdownMenuButton">
        Navigate
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
        <Dropdown.Item as={Link} to="/about">About Us</Dropdown.Item>
        <Dropdown.Item as={Link} to="/contact">Contact</Dropdown.Item>
        <Dropdown.Item as={Link} to="/services">Services</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Navigation;