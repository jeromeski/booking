import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from '../shared/form/BwmInput';
import {
	required,
	minLength4
} from '../shared/form/validators';
import BwmResError from '../shared/form/BwmResError';

const LoginForm = (props) => {
	const {
		handleSubmit,
		pristine,
		submitting,
		submitCb,
		errors
	} = props;
	return (
		<form onSubmit={handleSubmit(submitCb)}>
			<Field
				name='email'
				type='email'
				className='form-control'
				component={BwmInput}
				label='Email'
				validate={[required, minLength4]}
			/>
			<Field
				name='password'
				type='password'
				className='form-control'
				component={BwmInput}
				label='Password'
				validate={[required]}
			/>
			<button
				className='btn btn-bwm btn-form'
				type='submit'
				disabled={
					// !valid ||
					pristine || submitting || submitting
				}>
				Login
			</button>
			<BwmResError errors={errors} />
		</form>
	);
};


export default reduxForm({
	form: 'loginForm'
})(LoginForm);
