import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRentalById } from '../../actions';
import { rentalItems } from '../../data';

const rentals = rentalItems();

class RentalDetail extends Component {
  componentDidMount() {
    const rentalId = this.props.match.params.id;
    const selectedRental = rentals.find(rental => rental.id == rentalId);
    this.props.fetchRentalById(selectedRental);
  }
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>I am detail component {this.props.rental.id}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { rental: state.rental.data };
};

export default connect(mapStateToProps, { fetchRentalById })(RentalDetail);
