import React from 'react';
import { Field, reduxForm } from 'redux-form';

const renderField = ({
  input,
  label,
  type,
  className,
  meta: { touched, error, warning }
}) => (
  <div className='form-group'>
    <label>{label}</label>
    <div className='input-group'>
      <input {...input} type={type} className={className} />
    </div>
    {touched && error && <div className='alert alert-danger'>{error}</div>}
  </div>
);

const RegisterForm = (props) => {
  const { handleSubmit, pristine, submitting, submitCb } = props;
  return (
    <form onSubmit={handleSubmit(submitCb)}>
      <Field
        name='firstName'
        type='text'
        className='form-control'
        component={renderField}
        label='Username'
      />
      <Field
        name='lastName'
        type='text'
        className='form-control'
        component={renderField}
        label='Lastname'
      />
      <Field
        name='email'
        type='email'
        className='form-control'
        component={renderField}
        label='email'
      />
      <Field
        name='password'
        type='password'
        className='form-control'
        component={renderField}
        label='Password'
      />
      <Field
        name='password2'
        type='password'
        className='form-control'
        component={renderField}
        label='Confirm Password'
      />
      <button
        className='btn btn-bwm btn-form'
        type='submit'
        disabled={pristine || submitting}>
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
