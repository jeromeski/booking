import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rentalReducer } from './rental-reducer';
import { selectedRentalReducer } from './selectedRental-reducer';

export const init = () => {
  const reducer = combineReducers({
    rentals: rentalReducer,
    rental: selectedRentalReducer
  });
  const store = createStore(reducer, applyMiddleware(thunk));
  return store;
};
