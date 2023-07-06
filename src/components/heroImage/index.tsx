import React from 'react'
import Image from 'react-bootstrap/Image';
import './styles.scss';

declare type Props = {
    imageUrl: string;
    title?: string;
}

const HeroImage: React.FC<Props> = ({imageUrl}: Props)=> {
  return <Image src={imageUrl} className='image'/>
}

export default HeroImage