import React from 'react';
import {
	Container,
	Navbar,
	Form,
	FormControl,
	Button,
	Nav
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
						<Link
							className='nav-item nav-link active'
							to='/login'>
							Login{' '}
							<span className='sr-only'>
								(current)
							</span>
						</Link>
						<Link
							className='nav-item nav-link'
							to='/register'>
							Register
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
