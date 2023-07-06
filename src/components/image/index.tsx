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
  return (
    <Card className='image-card' >
      <Card.Img variant='top' src={imageSource} />
      <Card.ImgOverlay style={{display: 'flex', flexDirection: 'row', alignContent: 'flex-end', alignItems: 'flex-end'}}>
        <Card.Body style={{paddingBottom: 0}}>
        <Card.Title style={{color: '#fff'}}>{imageTitle}</Card.Title>
      </Card.Body>
      </Card.ImgOverlay>
      
    </Card>
  );
};
