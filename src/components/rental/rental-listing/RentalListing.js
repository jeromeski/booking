import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rentalItems } from '../../../data';
import { fetchRentals } from '../../../actions';
import RentalList from './RentalList';

class RentalListing extends Component {
  componentDidMount() {
    this.props.fetchRentals(rentalItems());
  }

  render() {
    console.log(this.props);
    return (
      <section id='rentalListing'>
        <h1 className='page-title'>Your Home All Around the World</h1>
        <RentalList rentals={this.props.rentals} />
      </section>
    );
  }
}

function mapStateToProps({ rentals }) {
  console.log(rentals);
  return {
    rentals: rentals.data
  };
}

export default connect(mapStateToProps, { fetchRentals })(RentalListing);
