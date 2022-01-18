import React from 'react';
import {
  Navbar,
  Container,
  Nav,
  Row,
  Col,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavbarComponent = () => (
  <Container>
    <Row className="justify-content-center">
      <Col md="auto">
        <Navbar bg="light" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Fotos</Nav.Link>
              <Nav.Link href="#link">Vídeos</Nav.Link>
              <Nav.Link href="#link">Contato</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  </Container>
);

export default NavbarComponent;
