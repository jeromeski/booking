import React, { Component } from 'react';
import RegisterForm from './RegisterForm';
import * as actions from '../../actions';
import { Redirect } from 'react-router-dom';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      errors: [],
      redirect: false
    };
    this.handleRegisterUser = this.handleRegisterUser.bind(this)
  }
  handleRegisterUser(userData) {
    actions.register(userData).then(
      (registered) => {
        this.setState({ redirect: true });
      },
      (errors) => {
        this.setState({ errors });
      }
    );
  }

  render() {
    const { errors, redirect } = this.state;

    if (redirect) {
      return (
        <Redirect
          to={{
            pathname: '/login',
            state: { successRegister: true }
          }}
        />
      );
    }
    return (
			<section id='register'>
				<div className='bwm-form'>
					<div className='row'>
						<div className='col-md-5'>
							<h1>Register</h1>
							<RegisterForm
								submitCb={this.handleRegisterUser}
								errors={errors}
							/>
						</div>
						<div className='col-md-6 ml-auto'>
							<div className='image-container'>
								<h2 className='catchphrase'>
									As our member you have access to most awesome places in the
									world.
								</h2>
								<img src={process.env.PUBLIC_URL + '/img/register-image.jpg'} alt='' />
							</div>
						</div>
					</div>
				</div>
			</section>
		);
  }
}

export default Register;
