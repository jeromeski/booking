import {
  FETCH_RENTALS,
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

export const fetchRentals = rentals => {
  return {
    type: FETCH_RENTALS,
    payload: rentals
  };
};

export const fetchRentalById = rentalId => dispatch => {
  dispatch(fetchRentalByIdInit());
  setTimeout(() => {
    const rental = rentalItems().find(
      rental => rental.id.toString() === rentalId
    );
    dispatch(fetchRentalByIdSuccess(rental));
  }, 2000);
};
