import React from 'react';
import Header from './shared/Header';
import { Container, Row } from 'react-bootstrap';
import RentalCard from './components/RentalCard';

const App = () => {
  return (
    <div>
      <Header />
      <Container>
        <section id='rentalListing'>
          <h1 className='page-title'>Your Home All Around the World</h1>
          <Row>
            <RentalCard />
            <RentalCard />
            <RentalCard />
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default App;
