import React from 'react';
import {
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComponent = () => (
  <Navbar expand="md" className="footer-bkg justify-content-center">
    <Container fluid>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <div className="footer" id="contato">
          <span>Desenvolvido por: Pedro Takahashi</span>
          <span>{" "}Layout por: Maria Botter</span>
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default FooterComponent;
