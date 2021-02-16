import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import authService from '../../../services/auth-service';

const ProtectedRoute = (props) => {
	const { component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(props) => {
				return authService.isAuthenticated() ? (
					<Redirect to={{ pathname: '/rentals' }} />
				) : (
					<Component {...props} {...rest} />
				);
			}}
		/>
	);
};

export default ProtectedRoute;
