import {
  FETCH_RENTALS,
  FETCH_RENTAL_BY_ID,
  FETCH_RENTAL_BY_ID_SUCCESS
} from '../actions/types';
import { rentalItems } from '../data';

export const fetchRentals = rentals => {
  return {
    type: FETCH_RENTALS,
    payload: rentals
  };
};

export const fetchRentalById = rentalId => dispatch => {
  setTimeout(() => {
    const rental = rentalItems().find(
      rental => rental.id.toString() === rentalId
    );
    dispatch(fetchRentalByIdSuccess(rental));
  }, 2000);
};

const fetchRentalByIdSuccess = rental => {
  return {
    type: FETCH_RENTAL_BY_ID_SUCCESS,
    payload: rental
  };
};
