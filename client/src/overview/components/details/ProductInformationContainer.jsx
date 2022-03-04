import React, { useState } from 'react';
import StarRating from '../../../starRating.jsx';
const ProductInformationContainer = (props) => {

  //props

  // name
  // category
  // star_rating
  // default_price
  // id

  if (props.product && Object.keys(props.product).length > 1) {
    return (
      <div className='information panel'>
        {/* <div className='stars'>stars</div> */}
        <StarRating rating={3.5}/>

        {props.product.category ? <h4 className='category'>{props.product.category}
        </h4> : <h4 className='category ghost'>...loading
        </h4>}
        { props.product.name ? <h1 className='name'>{props.product.name}</h1> : <h1 className='name ghost'>...loading</h1>
        }

        { props.sale_price ? <span><h4 className='price-sale'>${props.sale_price}</h4> <h4 className='price-struck'>${props.original_price}</h4> </span> : props.original_price ? <h4 className='price'>${props.original_price}</h4> : <h4 className='price ghost'>...loading</h4> }

      </div>

    );
  } else {
    return (
      <div className='information panel'>
        {/* button */}
        <span className='stars ghost'>stars</span>
        <h4 className='category ghost'>...loading
        </h4>
        <h1 className='name ghost'>...loading</h1>
        <div>
          <h4 className='price ghost'>...loading</h4>
          ProductInformationContainer
        </div>
        {/* button */}
        {/* <div className='feature-list'> FeatureList </div> */}
      </div>

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