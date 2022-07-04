import React from 'react';
import {
  Container,
  Col,
  Row,
  Carousel,
} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import video1 from '../../assets/videos/video1.mp4';
import video2 from '../../assets/videos/video2.mp4';
import video3 from '../../assets/videos/video3.mp4';
import video4 from '../../assets/videos/video4.mp4';
import video5 from '../../assets/videos/video5.mp4';

const VideoComponent = () => (
  <Container>
    <Row>
      <Col>
        <Carousel>
          <Carousel.Item>
            <video className="video-class" controls src={video1}>
              <track kind="captions" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video className="video-class" id="videos" controls src={video2}>
              <track kind="captions" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video className="video-class" id="videos" controls src={video3}>
              <track kind="captions" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video className="video-class" id="videos" controls src={video4}>
              <track kind="captions" />
            </video>
          </Carousel.Item>
          <Carousel.Item>
            <video className="video-class" id="videos" controls src={video5}>
              <track kind="captions" />
            </video>
          </Carousel.Item>
        </Carousel>
      </Col>
    </Row>
  </Container>
);

export default VideoComponent;
