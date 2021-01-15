import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './shared/Header';
import { Container } from 'react-bootstrap';

import { init } from './reducers';
import RentalListing from './components/rental/rental-listing/RentalListing';
import RentalDetail from './components/rental/rental-detail/RentalDetail';

const store = init();

const App = () => {
  return (
    <Provider store={store}>
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
          <Route exact path='/rentals' component={RentalListing} />
          <Route exact path='/rentals/:id' component={RentalDetail} />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
