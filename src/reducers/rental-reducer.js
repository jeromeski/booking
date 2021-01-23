import {
  FETCH_RENTALS_SUCCESS,
  FETCH_RENTAL_BY_ID_INIT,
  FETCH_RENTAL_BY_ID_SUCCESS
} from '../actions/types';

const INIT_STATE = {
  rentals: {
    data: []
  },
  rental: { data: {} }
};

export const rentalReducer = (state = INIT_STATE.rentals, action) => {
  switch (action.type) {
    case FETCH_RENTALS_SUCCESS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};

export const selectedRentalReducer = (state = INIT_STATE.rental, action) => {
  switch (action.type) {
    case FETCH_RENTAL_BY_ID_INIT: {
      return {
        ...state,
        data: {}
      };
    }
    case FETCH_RENTAL_BY_ID_SUCCESS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
