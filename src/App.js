import React from 'react';
import Header from './shared/Header';
import { Container } from 'react-bootstrap';
import RentalList from './components/rental/RentalList';

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <RentalList />
      </Container>
    </div>
  );
};

export default App;
