import React, { Component } from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import { getRangeOfDates } from '../../helpers';

class Booking extends Component {
	constructor() {
		super();
		this.bookedOutDates = [];
	}

	componentDidMount() {
		this.getBookedOutDates();
	}

	getBookedOutDates() {
		const { bookings } = this.props.rental;

		if (bookings && bookings.length > 0) {
			bookings.forEach((booking) => {
				const dateRange = getRangeOfDates(booking.startAt, booking.endAt, 'Y/MM/DD');
        debugger
        this.bookedOutDates.push(...dateRange);
        console.log(this.bookedOutDates);
			});
		}
	}

	render() {
		const { rental } = this.props;
		return (
			<div className='booking'>
				<h3 className='booking-price'>
					$ {rental.dailyRate} <span className='booking-per-night'>per night</span>
				</h3>
				<hr></hr>
				<div className='form-group'>
					<label htmlFor='dates'>Dates</label>
					<DateRangePicker opens='left' containerStyles={{ display: 'block' }}>
						<input id='dates' type='text' className='form-control' />
					</DateRangePicker>
				</div>
				<div className='form-group'>
					<label htmlFor='guests'>Guests</label>
					<input
						type='number'
						className='form-control'
						id='guests'
						aria-describedby='emailHelp'
						placeholder=''></input>
				</div>
				<button className='btn btn-bwm btn-confirm btn-block'>Reserve place now</button>
				<hr></hr>
				<p className='booking-note-title'>People are interested into this house</p>
				<p className='booking-note-text'>More than 500 people checked this rental in last month.</p>
			</div>
		);
	}
}

export default Booking;
