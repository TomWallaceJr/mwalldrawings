import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import './NavBar.css';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" className="d-flex justify-content-center">
      <Nav className="justify-content-between">
        <Nav.Link href="#home">AboutMe</Nav.Link>
        <Nav.Link href="#features">Pets</Nav.Link>
        <Nav.Link href="#pricing">People</Nav.Link>
        <Nav.Link href="#pricing">Contact</Nav.Link>
      </Nav>
    </Navbar>
  );
}
