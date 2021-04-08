import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark"
      className="d-flex justify-content-center"
    >
      <Navbar.Brand className="menu-label">Menu</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar">
          <Nav.Link className="navlink" href="#home">
            Main Gallery
          </Nav.Link>
          <Nav.Link className="navlink" href="#features">
            Pets
          </Nav.Link>
          <Nav.Link className="navlink" href="#pricing">
            People
          </Nav.Link>
          <Nav.Link className="navlink" href="#pricing">
            About Me
          </Nav.Link>
          <Nav.Link className="navlink" href="#pricing">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
