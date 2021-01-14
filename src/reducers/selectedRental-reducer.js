import { FETCH_RENTAL_BY_ID_SUCCESS } from '../actions/types';

const INIT_STATE = { rental: { data: {} } };

export const selectedRentalReducer = (state = INIT_STATE.rental, action) => {
  switch (action.type) {
    case FETCH_RENTAL_BY_ID_SUCCESS: {
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
