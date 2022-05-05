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
      <div className="footer" id="contato">
        <span>Desenvolvido por: Pedro Takahashi</span>
        <span>{" "}Layout por: Maria Botter</span>
      </div>
    </Container>
  </Navbar>  
);

export default FooterComponent;
