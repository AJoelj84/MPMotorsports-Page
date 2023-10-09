import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './assets/fonts.css';

function Navigation() {
  return (
    <Dropdown className= 'dropdown' style={{ float: 'right', paddingRight: '40px' }}>
      <Dropdown.Toggle variant="primary" id="dropdownMenuButton">
        Navigate
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/">Home</Dropdown.Item>
        <Dropdown.Item as={Link} to="/About">About</Dropdown.Item>
        <Dropdown.Item as={Link} to="/Contact">Contact</Dropdown.Item>
        <Dropdown.Item as={Link} to="/Services">Services</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Navigation;