import React, { useState } from 'react';

const ProductInformationContainer = (props) => {

  //props

  // name
  // category
  // star_rating
  // default_price
  // id


  return (
    <div className='information panel'>
      {/* button */}
      <span className='stars'>stars</span>
      <h4 className='category'>{props.data.category}
      </h4>
      <h1 className='name'>{props.data.name}</h1>
      <div>
        <h4 className='price'>{props.data.default_price}</h4>
        ProductInformationContainer
      </div>
      {/* button */}
      {/* <div className='feature-list'> FeatureList </div> */}
    </div>

  );
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