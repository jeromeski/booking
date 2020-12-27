import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import RentalCard from './RentalCard';

class RentalList extends Component {
  constructor() {
    super();
    this.state = {
      rentals: [1, 2, 3]
    };
  }

  renderRentals() {
    return this.state.rentals.map(rental => {
      return <RentalCard />;
    });
  }

  render() {
    return (
      <section id='rentalListing'>
        <h1 className='page-title'>Your Home All Around the World</h1>
        <Row>{this.renderRentals()}</Row>
      </section>
    );
  }
}

export default RentalList;
