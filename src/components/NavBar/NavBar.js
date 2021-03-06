import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar
      collapseOnSelect="true"
      expand="sm"
      bg="black"
      variant="dark"
      className="d-flex justify-content-center nav mb-2 nav-container"
    >
      <Navbar.Brand className="menu-label">Menu</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navbar">
          <Nav.Link className="navlink" as={Link} to="/maingallery">
            Main Gallery
          </Nav.Link>
          <Nav.Link className="navlink" as={Link} to="/pets">
            Pets
          </Nav.Link>
          <Nav.Link className="navlink" as={Link} to="/people">
            People
          </Nav.Link>
          <Nav.Link className="navlink" as={Link} to="/aboutme">
            About Me
          </Nav.Link>
          <Nav.Link className="navlink" as={Link} to="/contactme">
            Contact Me
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
