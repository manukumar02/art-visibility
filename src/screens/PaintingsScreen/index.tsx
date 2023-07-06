import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { ImageContainer } from '../../components/image';
import { usePhotosStore } from '../../store/photos';

const PaintingsScreen = () => {
  const { fetching, photos, getAllPhotos } = usePhotosStore();

  useEffect(() => {
    getAllPhotos();
  }, [getAllPhotos]);

  return fetching ? (
    <span>Loading...</span>
  ) : (
    <Row xs={1} md={3} lg={4} className='g-1'>
      {photos.length > 0 &&
        photos.map((item, index) => {
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
