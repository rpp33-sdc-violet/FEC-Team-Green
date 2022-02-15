import React, {useState} from 'react';

const ProductInformationContainer = (props)=> {

  //props

  // name
  // category
  // star_rating
  // default_price
  // id

  // style={pInformationStyle}>
  return (
    <div className='information panel'>
      {/* button */}
      {/* <div className='information'> */}
      <div>
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