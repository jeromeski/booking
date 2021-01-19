import axios from 'axios';

import {
  FETCH_RENTALS_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_BY_ID_SUCCESS
} from '../actions/types';
import { rentalItems } from '../data';

const fetchRentalByIdSuccess = rental => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    payload: rental
  };
};

const fetchRentalByIdInit = () => {
  return {
    type: FETCH_RENTAL_BY_ID_INIT
  };
};

const fetchRentalSuccess = rentals => {
  return {
    type: FETCH_RENTALS_SUCCESS,
    payload: rentals
  };
};

export const fetchRentals = () => dispatch => {
  axios.get('/api/v1/rentals').then(rentals => {
    debugger;
    dispatch(fetchRentalSuccess(rentals.data));
  });
};

export const fetchRentalById = rentalId => dispatch => {
  return dispatch => {
    dispatch(fetchRentalByIdInit());
    axios.get('/api/v1/rentals').then(rentals => {
      dispatch(fetchRentalByIdSuccess(rentals));
    });
  };
};
