import { FETCH_RENTAL_BY_ID } from '../actions/types';

const INIT_STATE = { rental: { data: null } };

export const selectedRentalReducer = (state = INIT_STATE.rental, action) => {
  switch (action.type) {
    case FETCH_RENTAL_BY_ID: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
