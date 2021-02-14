import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { BwmInput } from '../shared/form/BwmInput';


const RegisterForm = (props) => {
  const { handleSubmit, pristine, submitting, submitCb, valid } = props;
  return (
    <form onSubmit={handleSubmit(submitCb)}>
      <Field
        name='username'
        type='text'
        className='form-control'
        component={BwmInput}
        label='Username'
      />
      <Field
        name='email'
        type='email'
        className='form-control'
        component={BwmInput}
        label='email'
      />
      <Field
        name='password'
        type='password'
        className='form-control'
        component={BwmInput}
        label='Password'
      />
      <Field
        name='password2'
        type='password'
        className='form-control'
        component={BwmInput}
        label='Confirm Password'
      />
      <button
        className='btn btn-bwm btn-form'
        type='submit'
        disabled={!valid || pristine || submitting}>
        Submit
      </button>
    </form>
  );
};

const validate = (values) => {
  const errors = {};

  if (values.username && values.username.length < 4) {
    errors.username = 'Username must have at least 4 characters';
  }

  if (!values.email) {
    errors.email = 'Please enter email!';
  }

  if (!values.password2) {
    errors.email = 'Please enter to confirm your password';
  }

  if (values.password !== values.password2) {
    errors.password = 'Passwords must be the same';
  }
  return errors;
};

export default reduxForm({
  form: 'registerForm',
  validate
})(RegisterForm);
