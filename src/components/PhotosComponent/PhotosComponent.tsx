import React from 'react';
import {
  Container,
  Col,
  Row,
  Carousel,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from '../../assets/fotos/carousel/img1.jpeg';
import img2 from '../../assets/fotos/carousel/img2.jpeg';
import img3 from '../../assets/fotos/carousel/img3.jpeg';
import img4 from '../../assets/fotos/carousel/img4.jpeg';

const Photos = () => (
  <Container>
    <Row>
      <Col>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-75 mx-auto"
              src={img1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 mx-auto"
              src={img2}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 mx-auto"
              src={img3}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-75 mx-auto"
              src={img4}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default Photos;
