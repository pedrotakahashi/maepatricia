import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Alert, Container, Row, Col, Card, CardGroup, Button,
} from 'react-bootstrap';
import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import img1 from '../../assets/fotos/img3.jpeg';
import img2 from '../../assets/fotos/img4.jpeg';
import img3 from '../../assets/fotos/img5.jpeg';
import img4 from '../../assets/fotos/img1.jpeg';
import img5 from '../../assets/fotos/img2.jpeg';

const ContentComponent = () => (

  <Container className="main-container">
    <Row>
      <Col>
        <div>
          <video className="video-class" controls src={video1}>
            <track kind="captions" />
            {' '}
          </video>
        </div>
        <div>
          <span>
            Patrícia tinha apenas 8 anos de idade quando começou a revelar pequenos acontecimentos
            do futuro de seus pais e familiares, que
            {' '}
            {'\n'}
            {' '}
            impressionados chamaram amigos e familiares
            e assim, a pequena Patrícia desvendou um a um as suas vidas e futuro.
            {'\n'}
            Patricia começou a dedicar-se em tempo integral ao desenvolvimento espiritual
            aprimorando seus dons.

            Hoje Mãe Patricia de Xangô é uma pessoa capacitada e com total conhecimento na
            linha espiritual e mística.Por saber conciliar com perfeição seus dons e conhecimentos.
            Mãe Patricia de Xangô é a pessoa a orienta-lo em qualquer tipo de dúvida.

            Até os mais céticos dão o braço a torcer. Mãe Patrícia de Xangô é uma pessoa iluminada.
            Faça uma consulta e tome decisões certas.

            Saiba onde esté errado. Acerte no que há de vir. Consiga o equilíbrio em sua vida

            Nas linhas de suas mão estão os segredos do universo No jogo de búzios os mistérios
            do seu futuro Nas cartas você conseguirá suas respostas que tanto procura.
            Mesmo que você não acredite, marque uma consulta e amplie seus horizontes
          </span>
        </div>
      </Col>
    </Row>

    <Row>
      <Col>
        <h2>Como posso te ajudar ?</h2>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>União de Casais</Card.Title>
              <Card.Text>
                Tenha o amor que você tanto sonhou e acabe com as brigas em seu relacionamento
              </Card.Text>
              <Card.Img variant="top" src={img1} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Abertura de Caminho</Card.Title>
              <Card.Text>
                Com um trabalho de acolhimentos, iremos abrir seus
                caminhos e preparar você, para as coisas boas e positivas da vida
                {' '}
              </Card.Text>
              <Card.Img variant="top" src={img2} />
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Amarração Amorosa</Card.Title>
              <Card.Text>
                Tenha o amor que você tanto sonhou e acabe com as brigas em seu relacionamento
              </Card.Text>
              <Card.Img variant="top" src={img3} />
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </Row>

    <Row>
      <Col>
        <CardGroup>
          <Card>
            <Card.Body>
              <Card.Title>Afastamento de Rivais</Card.Title>
              <Card.Text>
                Afaste pessoas indesejadas de sua vida e do seu relacionamente.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>Saiba mais sobre o seu Futuro</Card.Title>
              <Card.Text>
                Previsões para 2022, descubra mais sobre você
                {' '}
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Col>
    </Row>
    <Row>
      <Col>
        {/* aqui vai ter o fundo do css */}

        <h3>
          Saiba mais sobre o seu futuro e acabe com seus problemas e indecisões
        </h3>

        <div>
          <video className="video-class" controls src={video2}>
            <track kind="captions" />
          </video>

          <span>
            Acabe com as indecisões que lhe prende no dia a dia.
            Seja qual for o problema, eu posso ajudar.
          </span>
        </div>
      </Col>
    </Row>
    <h2>Nosso compromisso é com você</h2>

    <Row>
      <Col>
        <Alert variant="warning">
          <span>
            Conquiste seu verdadeiro amor e saiba lidar com as dificuldades de sua vida amorosa!
            Tenha os Espíritos da Magia Branca trabalhando à favor da sua felicidade!
            Se você está sofrendo por amor, seu casamento vai de mal a pior, se deseja encontrar
            sua cara metade ou trazer de volta seu ex, não deixe de entrar em contato e agendar
            sua consulta!
            Não desista de sua felicidade!
            O trabalho espiritual de Amarração Amorosa só deverá ser feito se realmente o seu caso
            necessitar.
            Caso você queira fazer só por querer fazer, fique a vontade.
          </span>
        </Alert>
      </Col>

      <Col>
        <Alert variant="success">
          <Card.Img variant="top" src={img4} />
        </Alert>
      </Col>
    </Row>

    <Row>
      <Col>
        <Alert variant="success">
          <Card.Img variant="top" src={img5} />
        </Alert>
      </Col>
      <Col>
        <Alert variant="success">
          <span>
            {' '}
            fale comigo agora e
            {' '}
            <b>
              Comece a mudar
              <p>já a mudar a sua vida</p>
            </b>
            {' '}
          </span>
          <Button variant="primary">Telefone</Button>

          <Button variant="secondary">Whats App</Button>

        </Alert>
      </Col>
    </Row>
  </Container>

);

export default ContentComponent;
