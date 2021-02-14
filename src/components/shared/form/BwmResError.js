import React from 'react';

const BwmResError = ({ errors }) => {
  return (
    <div className='alert alert-danger bwm-res-errors'>
      {errors.map((error, index) => {
        return <p key={index}>{error.detail}</p>;
      })}
    </div>
  );
};

export default BwmResError;
