import React, { useState } from 'react';
import StarRating from '../../../starRating.jsx';
import ReadReviewsLink from './ReadReviewsLink.jsx';
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
        <ReadReviewsLink></ReadReviewsLink>
        {props.product.category ? <h2 className='category'>{props.product.category}
        </h2> : <h2 className='category ghost'>...loading
        </h2>}
        { props.product.name ? <h1 className='name'>{props.product.name}</h1> : <h1 className='name ghost'>...loading</h1>
        }

        { props.sale_price ? <span><p className='price-sale'>${props.sale_price}</p> <p className='price-struck'>${props.original_price}</p> </span> : props.original_price ? <p className='price'>${props.original_price}</p> : <p className='price ghost'>...loading</p> }

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