import { FETCH_RENTALS_SUCCESS } from '../actions/types';

const INIT_STATE = {
  rentals: {
    data: []
  }
};
export const rentalReducer = (state = INIT_STATE.rentals, action) => {
  switch (action.type) {
    case FETCH_RENTALS_SUCCESS: {
      debugger;
      return { ...state, data: action.payload };
    }
    default:
      return state;
  }
};
