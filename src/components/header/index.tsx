import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.scss';
import { Link } from 'react-router-dom';
import Drawer from '../drawer';
import { Container } from 'react-bootstrap';

declare type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className='header'>
      <Navbar expand='sm' fixed='top' variant='dark' bg="primary" data-bs-theme="dark" className="bg-body-tertiary">
        <Container fluid>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>   
        <Navbar.Offcanvas id='basic-navbar-nav' responsive="sm" backdropClassName="hello">
          <Drawer title={title}/>
        </Navbar.Offcanvas>
        </Container>   
        
      </Navbar>
    </div>
  );
};

export default Header;
