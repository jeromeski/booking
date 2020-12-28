import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import Header from './shared/Header';
import { Container } from 'react-bootstrap';
import RentalList from './components/rental/RentalList';
import RentalDetail from './components/rental/RentalDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Container>
        <Route
          exact
          path='/'
          render={() => {
            return <Redirect to='/rentals' />;
          }}
        />
        <Route exact path='/rentals' component={RentalList} />
        <Route exact path='/rentals/:id' component={RentalDetail} />
      </Container>
    </BrowserRouter>
  );
};

export default App;
