import React, {useState} from 'react';

// var pInformationStyle = {
//   'display': 'grid',
//   'backgroundColor': 'pink',

//   'grid-template-columns': '1fr',
//   'grid-template-rows': 'minmax(100px, auto)',
// };
const ProductInformation = (props)=> {

  //props

  // name
  // category
  // star_rating
  // default_price
  // id


  return (
    <div style={pInformationStyle}>
      {/* button */}
      <div className='slogan'> Product Slogan </div>

      <div className='information'>
        ProductInformation
      </div>
      {/* button */}
      {/* <div className='feature-list'> FeatureList </div> */}
    </div>

  );
};

export default ProductInformation;

/*
 Test if there are no reviews // read reviews does not appear
 Test if there is a sale. default price has a slash
 Test if there is a sale, sale price is displayed
 Test if there is no category --- default is --??
 Test if there is no price?  --?
 Test if there are no star_reviews
 Test that star reviews shows the correct number of stars
*/