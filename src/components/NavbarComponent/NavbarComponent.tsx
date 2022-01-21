import React from 'react';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => (
  <Navbar expand="md" fixed="top" className="navbar-bkg justify-content-center">
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Fotos</Nav.Link>
          <Nav.Link href="#link">Vídeos</Nav.Link>
          <Nav.Link href="#link">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
