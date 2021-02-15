import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import { Container } from 'react-bootstrap';
import { init } from './reducers';
import RentalListing from './components/rental/rental-listing/RentalListing';
import RentalDetail from './components/rental/rental-detail/RentalDetail';
import Login from './components/login/Login';
import Register from './components/register/Register';
import './App.scss';
import * as actions from './actions';
import Header from './components/shared/Header';

const store = init();

class App extends Component {
	componentDidMount() {
		this.checkAuthState();
	}
	checkAuthState() {
		// We don't need connect coz we have store here.
		store.dispatch(actions.checkAuthState());
	}

	logoutUser() {
		store.dispatch(actions.logout());
	}
	render() {
		return (
			<Provider store={store}>
				<BrowserRouter>
					<Header logout={this.logoutUser} />
					<Container>
						<Route
							exact
							path='/'
							render={() => {
								return <Redirect to='/rentals' />;
							}}
						/>
						<Route
							exact
							path='/rentals'
							component={RentalListing}
						/>
						<Route
							exact
							path='/rentals/:id'
							component={RentalDetail}
						/>
						<Route
							exact
							path='/login'
							component={Login}
						/>
						<Route
							exact
							path='/register'
							component={Register}
						/>
					</Container>
				</BrowserRouter>
			</Provider>
		);
	}
}


export default App;
