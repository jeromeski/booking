import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

const RentalCard = props => {
  const rental = props.rental;
  return (
    <Col md={3} xs={6}>
      <Link to={`/rentals/${rental.id}`} className='rental-detail-link'>
        <Card className='bwm-card'>
          <Card.Img
            className='card-img-top'
            src={rental.image}
            alt=''></Card.Img>
          <div className='card-block'>
            <Card.Subtitle className={`mb-2 ${rental.category}`}>
              {rental.shared ? 'shared' : 'whole'} {rental.category} &#183;{' '}
              {rental.city}
            </Card.Subtitle>
            <Card.Title>{rental.title}</Card.Title>
            <Card.Text>
              ${rental.dailyRate} per Night &#183; Free Cancelation
            </Card.Text>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default RentalCard;
