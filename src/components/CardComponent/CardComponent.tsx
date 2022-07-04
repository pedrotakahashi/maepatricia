import React from 'react';
import {
  Container,
  Row,
  Col,
  Card,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import img1 from '../../assets/fotos/img3.jpeg';
import img2 from '../../assets/fotos/img4.jpeg';
import img3 from '../../assets/fotos/img5.jpeg';

const CardComponent = () => (
  <Container>
    <Row className="mt-3 justify-content-center align-items-end mb-4" md={4}>
      <Col sm={12} md={4} className="card-mobile">
        <Card className="card-total">
          <Card.Body className="bkg-card">
            <Card.Title>União de Casais</Card.Title>
            <Card.Text>
              Tenha o amor que você tanto sonhou e acabe com as brigas em seu relacionamento
            </Card.Text>
            <Card.Img variant="top" src={img1} className="mt-4" />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} className="card-mobile">
        <Card className="card-total">
          <Card.Body className="bkg-card">
            <Card.Title>Abertura de Caminho</Card.Title>
            <Card.Text>
              Com um trabalho de acolhimento, iremos abrir seus caminhos e preparar
              você para as coisas boas e positivas da vida
            </Card.Text>
            <Card.Img variant="top" src={img2} />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} className="card-mobile-100">
        <Card className="card-total">
          <Card.Body className="bkg-card">
            <Card.Title>Amarração Amorosa</Card.Title>
            <Card.Text>
              Nunca deixe para amanhã o que pode ser resolvido hoje e não chore por um amor perdido,
              traga ele de volta aos seus pés
            </Card.Text>
            <Card.Img variant="top" src={img3} />
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row className="mt-4 justify-content-between">
      <Col md={5}>
        <Card className="card-total">
          <Card.Body className="bkg-card">
            <Card.Title>Afastamento de Rivais</Card.Title>
            <Card.Text>
              Afaste pessoas indesejadas de sua vida e do seu relacionamento.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={5}>
        <Card className="card-total">
          <Card.Body className="bkg-card">
            <Card.Title>Saiba mais sobre o seu Futuro</Card.Title>
            <Card.Text>
              Previsões para 2022, descubra mais sobre você
              {' '}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default CardComponent;
