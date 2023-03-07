import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { getStorage, ref, listAll, getDownloadURL } from 'firebase/storage';
import { initApp } from '../../api/configs';

const Photos = () => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const firebaseApp = initApp;
        console.log(firebaseApp)
        const storage = getStorage(firebaseApp, 'gs://maepatricia-aad6b.appspot.com');
        const imagesRef = ref(storage, 'fotos');
        const images = await listAll(imagesRef);
        const urls = await Promise.all(
          images.items.map(async (imageRef) => {
            const url = await getDownloadURL(imageRef);
            return url;
          })
        );
        setImageUrls(urls);
      }catch(error){
        console.log(error,"deu erro aqui");
      }
   
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <Carousel>
            {imageUrls.map((imageUrl) => (
              <Carousel.Item key={imageUrl}>
                <img className="d-block w-75 mx-auto" src={imageUrl} alt="slide" />
              </Carousel.Item>
            ))}
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default Photos;
