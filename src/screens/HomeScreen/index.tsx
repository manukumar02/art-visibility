import { Container } from 'react-bootstrap';
import HeroImage from '../../components/heroImage';
import './styles.scss';
import { useEffect, useState } from 'react';
import { ImageType } from '../../core/interfaces/images.interface';
import axios from 'axios';

const HomeScreen = () => {
  const [heroImage, setHeroImage] = useState<ImageType>();
  useEffect(() => {
    async function getHeroImage() {
      try {
        const { data } = await axios.get(
          'https://api.slingacademy.com/v1/sample-data/photos/10'
        );
        setHeroImage(data.photo);
      } catch (error) {
        console.log(error);
      }
    }
    getHeroImage();
  }, []);
  return (
    <Container className='main-container' fluid>
      <div className='hero-image'>
        {heroImage?.url !== undefined && <HeroImage imageUrl={heroImage.url} />}
      </div>
      <div className='image-category'>
        <h1>Categories</h1>
      </div>
      <div className='high-selling-painting'>
        <h1>High Selling Paintings</h1>
      </div>
      <div className='premium-section'>
        <h1>Premiun Paintings</h1>
      </div>
      <div className='all-painiting'>
        <h1>All Paintings</h1>
      </div>
    </Container>
  );
};

export default HomeScreen;
