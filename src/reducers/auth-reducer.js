import {
	LOGIN_SUCCESS,
	LOGIN_FAILURE
} from '../actions/types';

const INIT_STATE = {
	isAuth: false,
	errors: []
};

export const authReducer = (
	state = INIT_STATE,
	action
) => {
	switch (action.type) {
		case LOGIN_SUCCESS: {
			// return {
			// 	...state,
			// 	isAuth: true,
			// 	token: action.token,
			// 	errors: []
			// };
			return Object.assign({}, state, {
				isAuth: true,
				errors: []
			});
		}
		case LOGIN_FAILURE: {
			// return { ...state, data: action.errors };
			return Object.assign({}, state, {
				errors: action.errors
			});
		}
		default:
			return state;
	}
};
