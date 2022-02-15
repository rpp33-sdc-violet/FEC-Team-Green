import React from 'react';

// I want to try and re-use CardInfo if possible,
// for both products and outfits to maintain the DRY principle
const CardInfo = (props) => {

  return (
    <div className='cardInfo'>
      <p className='productName'></p>
      <p className='productPrice'></p>
      <p className='productRating'></p>
    </div>
  );
};

export default CardInfo;