import React, { useState } from 'react';

const ProductInformationContainer = (props) => {

  //props

  // name
  // category
  // star_rating
  // default_price
  // id

  if (Object.keys(props.product).length > 1) {
    return (
      <div className='information panel'>
        {/* button */}
        <span className='stars'>stars</span>
        <h4 className='category'>{props.product.category}
        </h4>
        <h1 className='name'>{props.product.name}</h1>
        <div>
          <h4 className='price'>{props.product.default_price}</h4>
          ProductInformationContainer
        </div>
        {/* button */}
        {/* <div className='feature-list'> FeatureList </div> */}
      </div>

    );
  } else {
    return (
      <div> loading </div>
    );
  }
};

export default ProductInformationContainer;

/*
 Test if there are no reviews // read reviews does not appear
 Test if there is a sale. default price has a slash
 Test if there is a sale, sale price is displayed
 Test if there is no category --- default is --??
 Test if there is no price?  --?
 Test if there are no star_reviews
 Test that star reviews shows the correct number of stars
*/