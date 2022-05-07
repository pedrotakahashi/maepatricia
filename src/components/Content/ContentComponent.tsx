import React from 'react';
import {AiOutlineStar} from 'react-icons/ai';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
   Container, Row, Col
  } from 'react-bootstrap';

import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import SocialComponent from '../SocialMediaComponent/SocialComponent';
import CardComponent from '../CardComponent/CardComponent';
import Photos from '../PhotosComponent/PhotosComponent';
import { Text } from '../../Interface/constants';

const ContentComponent = () => (

  <Container className="main-container" fluid>
    <Row>
      <Col sm={12} md={8} className="mx-auto">
        <div id="home">
          <video className="video-class" controls src={video1}>
            <track kind="captions" />
            {' '}
          </video>
        </div>
      </Col>
    </Row>
      <Container fluid className="about-content">
        <Row md={12}>
          <Col>
            <span>
              {Text.biography}
          </span>
          </Col>
        </Row>
      </Container>
    <Row className="mt-2">
      <Col md={12}>
        <Col className="under-title" md={4}>
          <div className="titles">
            <AiOutlineStar className='icon-animation' />
              Como posso te ajudar?
            <AiOutlineStar className='icon-animation' />
          </div>
        </Col>
      </Col>
    </Row>
    <CardComponent />
    <Row>
      <Col>
        <Col className="under-title" md={12}>
          <div className="titles">
            <AiOutlineStar className='icon-animation' />
              Saiba mais sobre o seu futuro e acabe com seus problemas e indecisões
            <AiOutlineStar className='icon-animation' />
          </div>
        </Col>
        <Row>
          <Col className="mx-auto" sm={12} md={8}>
          <video className="video-class" id="videos" controls src={video2}>
            <track kind="captions" />
          </video>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="mt-4 mb-4">
            <div className="titles">
              <AiOutlineStar className='icon-animation' />
                Acabe com as indecisões que lhe prendem no dia a dia.
                Seja qual for o problema, eu posso ajudar.
              <AiOutlineStar className='icon-animation' />
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Container fluid className="about-content">
        <span>
         {Text.marketing}
        </span>
      </Container>
      <Row>
        <Col className="under-title mt-4 mb-4" md={6}>
          <div className="titles">
            <AiOutlineStar className='icon-animation' />
              Nosso compromisso é com você
            <AiOutlineStar className='icon-animation' />
          </div>
        </Col>
      </Row>   
    </Row>
    <Photos />
    <Row>
      <Col className="under-title mt-4 mb-4" md={6}>
        <div className="titles">
          <AiOutlineStar className='icon-animation' />
            Fale comigo agora e comece a mudar já a sua vida
          <AiOutlineStar className='icon-animation' />
        </div>
      </Col>
    </Row> 
    <SocialComponent />
  </Container>

);

export default ContentComponent;
