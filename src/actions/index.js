import axios from 'axios';
import authService from '../services/auth-service';

import {
	FETCH_RENTALS_SUCCESS,
	FETCH_RENTAL_BY_ID_INIT,
	FETCH_RENTAL_BY_ID_SUCCESS,
	LOGIN_SUCCESS,
	LOGIN_FAILURE,
	LOGOUT
} from '../actions/types';


//====== RENTALS ACTIONS =============================
const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  };
};

const fetchRentalByIdSuccess = rental => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    payload: rental
  };
};

const fetchRentalSuccess = rentals => {
  return {
    type: FETCH_RENTALS_SUCCESS,
    payload: rentals
  };
};

export const fetchRentals = () => dispatch => {
  axios
    .get('/api/v1/rentals')
    .then(res => res.data)
    .then(rentals => dispatch(fetchRentalSuccess(rentals)));
};

export const fetchRentalById = rentalId => dispatch => {
  dispatch(fetchRentalByIdInit());
  axios
    .get(`/api/v1/rentals/${rentalId}`)
    .then(res => res.data)
    .then(rental => dispatch(fetchRentalByIdSuccess(rental)));
};

//====== AUTH ACTIONS =============================

export const loginSuccess = () => {
	return {
		type: LOGIN_SUCCESS
	};
};

export const register = (userData) => {
  return axios.post('/api/v1/users/register', { ...userData }).then(
    (res) => res.data,
    (err) => Promise.reject(err.response.data.errors)
  );
}

const loginFailure = (errors) => {
	return {
		type: LOGIN_FAILURE,
		errors
	};
};

export const checkAuthState = () => {
	return (dispatch) => {
		if (authService.isAuthenticated()) {
			dispatch(loginSuccess());
		}
	};
};

export const login = (userData) => {
	return (dispatch) => {
		return axios
			.post('/api/v1/users/auth', userData)
			.then((res) => res.data)
			.then((token) => {
				authService.saveToken(token);
				dispatch(loginSuccess());
			})
			.catch(({   response   }) => {
				dispatch(
					loginFailure(response.data.errors)
				);
			});
	};
};

export const logout = () => {
	authService.invalidateUser();
	return {
		type: LOGOUT
	};
};