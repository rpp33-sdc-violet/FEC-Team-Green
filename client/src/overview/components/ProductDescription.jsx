import React, {useState} from 'react';

var pDescriptionStyle = {
  'display': 'grid',
  'backgroundColor': 'pink',

  'grid-template-columns': '1fr',
  'grid-template-rows': 'minmax(100px, auto)',
};
const ProductDescription = (props)=> {

  //props

  // props.thumnailUrlList = list of  thumbnail urls
  // props.urlList = list of urls
  // local state highlighted url index
  //method to change highlighted url

  return (
    <div style={pDescriptionStyle}>
      {/* button */}
      <div className='slogan'> Product Slogan </div>

      <div className='description'>
        ProductDescription
      </div>
      {/* button */}
      {/* <div className='feature-list'> FeatureList </div> */}
    </div>

  );
};

export default ProductDescription;

/*
 Test does slogan appear in component
 Test does description appear in component
 Test does feature list appear in component
*/