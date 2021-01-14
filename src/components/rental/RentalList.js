import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import RentalCard from './RentalCard';
import { rentalItems } from '../../data';
import { fetchRentals } from '../../actions/index';

class RentalList extends Component {
  componentDidMount() {
    this.props.fetchRentals(rentalItems());
  }

  renderRentals() {
    return this.props.rentals.map((rental, index) => {
      return <RentalCard key={index} rental={rental} />;
    });
  }

  render() {
    console.log(this.props);
    return (
      <section id='rentalListing'>
        <h1 className='page-title'>Your Home All Around the World</h1>
        <Row>{this.renderRentals()}</Row>
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

export default connect(mapStateToProps, { fetchRentals })(RentalList);
