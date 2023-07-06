import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './styles.scss';
import { Link } from 'react-router-dom';

declare type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }: Props) => {
  return (
    <div className='header'>
      <Navbar expand='lg' fixed='top' variant='dark' bg='dark'>
        <Navbar.Brand>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to={'/'}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={'/paintings'}>
              All Paintings
            </Nav.Link>
            <Nav.Link as={Link} to={'/about-us'}>
              About us
            </Nav.Link>
            <Nav.Link as={Link} to={'/contact-us'}>
              Contact us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
