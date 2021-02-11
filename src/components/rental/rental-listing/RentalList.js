import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import RentalCard from './RentalCard';

class RentalList extends Component {
  renderRentals() {
    return this.props.rentals.map((rental, index) => {
      return <RentalCard key={index} rental={rental} />;
    });
  }

  render() {
    return <Row>{this.renderRentals()}</Row>;
  }
}

export default RentalList;
