import React from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './shared/Header';
import thunk from 'redux-thunk';
import { Container } from 'react-bootstrap';
import RentalList from './components/rental/RentalList';
import RentalDetail from './components/rental/RentalDetail';
import { init } from './reducers';

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
          <Route exact path='/rentals' component={RentalList} />
          <Route exact path='/rentals/:id' component={RentalDetail} />
        </Container>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
