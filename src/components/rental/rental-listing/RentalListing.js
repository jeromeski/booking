import React, { Component } from 'react';
import { connect } from 'react-redux';
import { rentalItems } from '../../../data';
import { fetchRentals } from '../../../actions';
import RentalList from './RentalList';

const withAlert = (ChildComponent) => {
  class ComposedComponent extends Component {
    alertUser() {
      alert('WAKE UP!!!');
    }

    render() {
      return <ChildComponent {...this.props} alert={this.alertUser} />;
    }
  }
  return ComposedComponent;
};

const withDanger = (ChildComponent) => {
  class ComposedComponent extends Component {
    dangerUser() {
      alert('DANGER!!!');
    }

    render() {
      return <ChildComponent {...this.props} danger={this.dangerUser} />;
    }
  }
  return ComposedComponent;
};


class RentalListing extends Component {
  componentDidMount() {
    this.props.alert();
    this.props.danger();
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

export default withDanger(
  withAlert(connect(mapStateToProps, { fetchRentals })(RentalListing))
);
