import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImageContainer } from '../../components/image';
import { ImageType } from '../../core/interfaces/images.interface';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';

const PaintingsScreen = () => {
  const [data, setData] = useState<ImageType[]>([]);

  useEffect(() => {
    async function getImages() {
      try {
        const { data } = await axios.get(
          'https://api.slingacademy.com/v1/sample-data/photos?limit=100'
        );
        setData(data.photos);
      } catch (error) {
        console.log(error);
      }
    }

    getImages();
  }, []);

  return (
    <Row xs={1} md={3} lg={4} className="g-1">
      {data.length > 0 &&
        data.map((item, index) => {
          console.log(item);
          return (
            <Col key={index}>
              <ImageContainer imageSource={item.url} imageTitle={item.title} />
            </Col>
          );
        })}
    </Row>
  );
};

export default PaintingsScreen;
