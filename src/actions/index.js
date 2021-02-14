import axios from 'axios';

import {
  FETCH_RENTALS_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_BY_ID_SUCCESS
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

export const register = (userData) => {
  return axios.post('/api/v1/users/register', {...userData}).then((res) => {debugger; return res.data}, (err) => { debugger; return Promise.reject(err.response.data.errors)})
}