import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">AboutMe</Nav.Link>
        <Nav.Link href="#features">Pets</Nav.Link>
        <Nav.Link href="#pricing">People</Nav.Link>
      </Nav>
    </Navbar>
  );
}
