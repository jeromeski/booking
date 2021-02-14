import React from 'react';
import { Field, reduxForm } from 'redux-form';

const RegisterForm = (props) => {
  const { handleSubmit, pristine, submitting, submitCb } = props;
  return (
    <form onSubmit={handleSubmit(submitCb)}>
      <div>
        <label>First Name</label>
        <div>
          <Field
            name='firstName'
            component='input'
            type='text'
            placeholder='First Name'
            className='form-control'
          />
        </div>
      </div>
      <div>
        <label>Last Name</label>
        <div>
          <Field
            name='lastName'
            component='input'
            type='text'
            placeholder='Last Name'
            className='form-control'
          />
        </div>
      </div>
      <div>
        <label>Email</label>
        <div>
          <Field
            name='email'
            component='input'
            type='email'
            placeholder='Email'
            className='form-control'
          />
        </div>
      </div>
      <div>
        <label>Password</label>
        <div>
          <Field
            name='password'
            component='input'
            type='password'
            placeholder='Password'
            className='form-control'
          />
        </div>
      </div>
      <div>
        <label>Confirm Password</label>
        <div>
          <Field
            name='password2'
            component='input'
            type='password'
            placeholder='Confirm Password'
            className='form-control'
          />
        </div>
      </div>
      <div>
        <button
          className='btn btn-bwm btn-form'
          type='submit'
          disabled={pristine || submitting}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'registerForm'
})(RegisterForm);
