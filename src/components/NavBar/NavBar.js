import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
      <Nav className="mr-auto">
        <Nav.Link href="#home">AboutMe</Nav.Link>
        <Nav.Link href="#features">Pets</Nav.Link>
        <Nav.Link href="#pricing">People</Nav.Link>
      </Nav>
    </Navbar>
  );
}
