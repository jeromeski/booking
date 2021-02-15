import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from '../shared/form/BwmInput';
// import BwmResError from '../shared/form/BwmResError';

const LoginForm = (props) => {
	const {
		handleSubmit,
		pristine,
		submitting,
		submitCb
		// valid,
		// errors
	} = props;
	return (
		<form onSubmit={handleSubmit(submitCb)}>
			<Field
				name='email'
				type='email'
				className='form-control'
				component={BwmInput}
				label='Email'
			/>
			<Field
				name='password'
				type='password'
				className='form-control'
				component={BwmInput}
				label='Password'
			/>
			<button
				className='btn btn-bwm btn-form'
				type='submit'
				disabled={
					// !valid ||
					pristine || submitting
				}>
				Submit
			</button>
			{/* <BwmResError errors={errors}*/}
		</form>
	);
};

/*
const validate = (values) => {
	const errors = {};

	if (!values.email) {
		errors.email = 'Please enter email!';
	}

	if (!values.password) {
		errors.email = 'Please enter your password';
	}

	return errors;
};

*/

export default reduxForm({
	form: 'loginForm'
})(LoginForm);
