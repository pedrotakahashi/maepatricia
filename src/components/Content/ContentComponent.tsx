import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Alert, Container, Row, Col, Card, Button,
} from 'react-bootstrap';
import {AiOutlineStar} from 'react-icons/ai';

import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import img1 from '../../assets/fotos/img3.jpeg';
import img2 from '../../assets/fotos/img4.jpeg';
import img3 from '../../assets/fotos/img5.jpeg';
import SocialComponent from '../SocialMediaComponent/SocialComponent';
import Photos from '../PhotosComponent/PhotosComponent';

const ContentComponent = () => (

  <Container className="main-container" fluid>
    <Row>
      <Col>
        <div id="home">
          <video className="video-class" controls src={video1}>
            <track kind="captions" />
            {' '}
          </video>
        </div>
      </Col>
      <Container fluid className="about-content">
        <Row md={12}>
          <Col>
            <span>
            Patricia tinha apenas 8 anos de idade quando começou a revelar pequenos acontecimentos do
            futuro de seus pais e familiares que, impressionados, chamaram amigos e familiares, e assim,
            a pequena Patricia desvendou um a um as suas vidas e futuros. Patrícia começou a dedicar-se
            em tempo integral ao desenvolvimento espiritual, aprimorando seus dons. Hoje,
            Mãe Patricia de Xangô é uma pessoa capacitada e com total conhecimento na linha espiritual
            e mística. Por saber conciliar com perfeição seus dons e conhecimentos, Mãe Patricia de Xangô
            é a pessoa a orientá-lo em qualquer tipo de dúvida. Até os mais céticos dão o braço a torcer.
            Mãe Patrícia de Xangô é uma pessoa iluminada. Faça uma consulta e tome decisões certas. Saiba
            onde está errando. Acerte no que há de vir. Consiga o equilíbrio em sua vid. Nas linhas de
            suas mão estão os segredos do universo. No jogo de búzios os mistérios do seu futuro.
            Nas cartas você conseguirá suas respostas que tanto procura. Mesmo que você não acredite,
            marque uma consulta e amplie seus horizontes.
          </span>
          </Col>
        </Row>
      </Container>
    </Row>
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
    <Row className="mt-3 justify-content-center align-items-end mb-4" md={4} >
    <Col sm={12} md={4} >
        <Card className='card-total'>
          <Card.Body className='bkg-card'>
            <Card.Title>União de Casais</Card.Title>
            <Card.Text>
              Tenha o amor que você tanto sonhou e acabe com as brigas em seu relacionamento
            </Card.Text>
            <Card.Img variant="top" src={img1} className="mt-4" />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} >
        <Card className='card-total'>
         <Card.Body className='bkg-card'>
            <Card.Title>Abertura de Caminho</Card.Title>
            <Card.Text>
              Com um trabalho de acolhimento, iremos abrir seus caminhos e preparar
              você para as coisas boas e positivas da vida
            </Card.Text>
            <Card.Img variant="top" src={img2} />
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4} >
        <Card className='card-total'>
         <Card.Body className='bkg-card'>
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
        <Card className='card-total'>
         <Card.Body className='bkg-card'>
            <Card.Title>Afastamento de Rivais</Card.Title>
            <Card.Text>
              Afaste pessoas indesejadas de sua vida e do seu relacionamento.
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col md={5}>
        <Card className='card-total'>
         <Card.Body className='bkg-card'>
            <Card.Title>Saiba mais sobre o seu Futuro</Card.Title>
            <Card.Text>
              Previsões para 2022, descubra mais sobre você
              {' '}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col>
        <Col className="under-title" md={12}>
          <div className="titles">
            <AiOutlineStar className='icon-animation' />
              Saiba mais sobre o seu futuro e acabe com seus problemas e indecisões
            <AiOutlineStar className='icon-animation' />
          </div>
        </Col>
        <div>
          <video className="video-class" id="videos" controls src={video2}>
            <track kind="captions" />
          </video>
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
        </div>
      </Col>
    </Row>
    <Row>
      <Container fluid className="about-content">
        <span>
          Conquiste seu verdadeiro amor e saiba lidar com as dificuldades de sua vida amorosa!
          Tenha os Espíritos da Magia Branca trabalhando à favor da sua felicidade! Se você está
          sofrendo por amor, se seu casamento vai de mal a pior, se deseja encontrar sua cara metade
          ou trazer de volta seu ex, não deixe de entrar em contato e agendar sua consulta!
          Não desista de sua felicidade! O trabalho espiritual de Amarração Amorosa só deverá ser
          feito se realmente o seu caso necessitar. Caso você queira fazer só por querer fazer,
          fique a vontade.
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
