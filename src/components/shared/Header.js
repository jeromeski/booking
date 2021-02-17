import React from 'react';
import { Fragment } from 'react';
import {
	Container,
	Navbar,
	Form,
	FormControl,
	Button,
	Nav
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';


const Header = (props) => {
  
  const handleLogout = () => {
    props.logout();
    props.history.push('/login')
  }

  const ShowLogout = () => {
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    return <a className='nav-item nav-link clickable' onClick={() => handleLogout(props.logout)}>Logout</a>
  }

  const ShowLoginRegister = () => {
    return <Fragment>
			<Link className='nav-item nav-link active' to='/login'>
				Login <span className='sr-only'>(current)</span>
			</Link>
			<Link className='nav-item nav-link' to='/register'>
				Register
			</Link>
		</Fragment>;
  }

  const renderLinks = () => {
		if (props.auth.isAuth) {
			return <ShowLogout/>
		} else {
			return <ShowLoginRegister/>
		}
	};

	return (
		<Navbar bg='dark' variant='dark' expand='lg'>
			<Container>
				<Navbar.Brand as={Link} to='/rentals'>
					BookWithMe
				</Navbar.Brand>
				<Form inline>
					<FormControl
						type='text'
						placeholder='Try New York'
						className='mr-sm-2 bwm-search'
					/>
					<Button
						className='my-2 my-sm-0 btn-bwm-search'
						variant='outline-success'
						type='submit'>
						Search
					</Button>
				</Form>
				<Navbar.Toggle aria-controls='navbarNavAltMarkup' />
				<Navbar.Collapse id='navbarNavAltMarkup'>
					<Nav className='navbar-nav ml-auto'>
            {renderLinks()}

					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};


const mapStateToProps = (state) => {
	return {
		auth: state.auth
	};
};

export default withRouter(connect(mapStateToProps)(Header));
