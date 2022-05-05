import React from 'react';
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Alert,
  Button,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFacebook, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const SocialComponent = () => (
  <>
    <Row>
      <p className="title">Siga-nos nas redes sociais</p>
      <Col md={4} className="social-content">
            <a
              href='https://www.instagram.com/patriciadexango/'
              target="_blank"
              rel="noreferrer"
              >
              <BsInstagram className="social-buttons"/>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5511984002407&text=Ol%C3%A1%20M%C3%A3e%20Patr%C3%ADcia!%20Eu%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20como%20voc%C3%AA%20pode%20me%20ajudar."
              target="_blank"
              rel="noreferrer"
              >
              <BsWhatsapp className="social-buttons" />
            </a>
            <a
              href='https://www.facebook.com/maepatriciadexangoespirita/'
              target="_blank"
              rel="noreferrer"
              >
              <BsFacebook className="social-buttons" />
            </a>
      </Col>
    </Row>
  </>
);

export default SocialComponent;
