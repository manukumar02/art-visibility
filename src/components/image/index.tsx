import React from 'react';
import './styles.scss';
import Card from 'react-bootstrap/esm/Card';

declare type Props = {
  imageSource: string;
  imageTitle: string;
};

export const ImageContainer: React.FC<Props> = ({
  imageSource,
  imageTitle,
}: Props) => {
  const handleImageClick = () => {
    console.log('CARD CLICKEED');
  };

  return (
    <Card className='image-card' onClick={handleImageClick}>
      <Card.Img variant='top' src={imageSource} />
      <Card.ImgOverlay>
        <Card.Body style={{ paddingBottom: 0 }}></Card.Body>
      </Card.ImgOverlay>
      <Card.Footer>
        <Card.Title as={'h6'}>{imageTitle}</Card.Title>
      </Card.Footer>
    </Card>
  );
};
