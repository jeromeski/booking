import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Card } from 'react-bootstrap';

const RentalCard = props => {
  const rental = props.rental;
  return (
    <Col md={3} xs={6}>
      <Link to={`/rental/${rental.id}`} className='card-link'>
        <Card className='bwm-card'>
          <Card.Img
            className='card-img-top'
            src={rental.image}
            alt=''></Card.Img>
          <div className='card-block'>
            <Card.Subtitle className='card-subtitle mb-2'>
              {rental.shared ? 'shared' : 'whole'} {rental.category} &#183;{' '}
              {rental.city}
            </Card.Subtitle>
            <Card.Title className='card-title'>{rental.title}</Card.Title>
            <Card.Text className='card-text'>
              ${rental.dailyRate} per Night &#183; Free Cancelation
            </Card.Text>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default RentalCard;
