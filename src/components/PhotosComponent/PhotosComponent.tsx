import React from 'react';
import {
  Container,
  Col,
  Row,
  Carousel,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import img4 from '../../assets/fotos/img1.jpeg';
import img5 from '../../assets/fotos/img2.jpeg';

const Photos = () => (
 <>
 <Container>
   <Row id="fotos">
     <Col>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src={img4}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-75 mx-auto"
            src={img5}
            alt="First slide"
          />
        </Carousel.Item>
      </Carousel>
     </Col>
   </Row>
 </Container>
 
</>
);

export default Photos;
