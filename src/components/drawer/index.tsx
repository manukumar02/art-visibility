import React, { useState } from 'react';
import './styles.scss';
import Offcanvas from 'react-bootstrap/esm/Offcanvas';

declare type Props = {};

const Drawer: React.FC<Props> = (props: Props) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className='drawer'>
      <Offcanvas show={show} onHide={handleClose} placement='start' backdrop={false}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Art Visibility</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, at fugit exercitationem vero quo beatae porro id doloremque, excepturi debitis veniam accusamus dolorum suscipit maiores unde a eos nisi error possimus architecto sapiente. Velit veniam alias laboriosam voluptas officia, rerum placeat at culpa! Tenetur dolorem ratione voluptatum voluptas, est autem!
          </p>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Drawer;
