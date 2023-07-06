import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import Navigations from './Navigations';

import Header from './components/header';
import Footer from './components/footer';
import { Container } from 'react-bootstrap';

const App: React.FC<any> = () => {
  return (
    <Router basename='/art-visibility'>
      <Header title='Painting' />
      <Container className='content' fluid>
        <Navigations />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
