import React from 'react';
import { Col, Card } from 'react-bootstrap';

const RentalCard = () => {
  return (
    <Col md={3} xs={6}>
      <Card className='bwm-card'>
        <Card.Img
          className='card-img-top'
          src='http://via.placeholder.com/350x250'
          alt=''></Card.Img>
        <div className='card-block'>
          <Card.Subtitle className='card-subtitle mb-2'>
            Whole Apartment &#183; New York
          </Card.Subtitle>
          <Card.Title className='card-title'>Some nice apartment</Card.Title>
          <Card.Text className='card-text'>
            $240 per Night &#183; Free Cancelation
          </Card.Text>
          <Card.Link href='' className='card-link'>
            More Info
          </Card.Link>
        </div>
      </Card>
    </Col>
  );
};

export default RentalCard;
