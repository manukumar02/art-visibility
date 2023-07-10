import React, { useState } from 'react';
import './styles.scss';
import Offcanvas from 'react-bootstrap/esm/Offcanvas';
import Nav from 'react-bootstrap/esm/Nav';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/esm/Navbar';
import { Container } from 'react-bootstrap';

declare type Props = {
  title: string;
};

const Drawer: React.FC<Props> = ({ title }: Props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    console.log('CLOSEDDDDDD HIDE')
  };
  return (
    <div className='drawer'>
      <Offcanvas.Header closeButton onHide={handleClose}>
        <Offcanvas.Title>Art Visibility</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className='me-auto'>
          <Navbar.Brand>{title}</Navbar.Brand>
          <Nav.Link as={Link} to={'/'} onClick={handleClose}>
            Home
          </Nav.Link>
          <Nav.Link as={Link} to={'/paintings'} onClick={handleClose}>
            All Paintings
          </Nav.Link>
          <Nav.Link as={Link} to={'/about-us'} onClick={handleClose}>
            About us
          </Nav.Link>
          <Nav.Link as={Link} to={'/contact-us'} onClick={handleClose}>
            Contact us
          </Nav.Link>
        </Nav>
      </Offcanvas.Body>
    </div>
  );
};

export default Drawer;
