import React from 'react';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => (
  <Navbar expand="md" sticky='top' variant="dark" className="navbar-bkg navbar-component justify-content-center">
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#home" className="effect-button">Home</Nav.Link>
          <Nav.Link href="#fotos" className="effect-button">Fotos</Nav.Link>
          <Nav.Link href="#videos" className="effect-button">Vídeos</Nav.Link>
          <Nav.Link href="#contato" className="effect-button">Contato</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default NavbarComponent;
