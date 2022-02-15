import React from 'react';
import CardInfo from './CardInfo.jsx';

const ProductCard = (props) => {


  return (
    <div className='productCard'>
      {/* star could be an svg  */}
      {/* <div className='star'></div> */}
      <div className='productIMG'></div>
      {/* Will trial a card info sub-component for now */}
      {/* <h1>ProductCard</h1> */}
      <CardInfo />
    </div>
  );

};

export default ProductCard;