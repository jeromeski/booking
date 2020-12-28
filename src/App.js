import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './shared/Header';
import { Container } from 'react-bootstrap';
import RentalList from './components/rental/RentalList';
import RentalDetail from './components/rental/RentalDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Route exact path='/' component={RentalList} />
        <Route exact path='/test' component={RentalDetail} />
      </Container>
    </BrowserRouter>
  );
};

export default App;
