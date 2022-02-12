import React from 'react';

var ProductDescription = function (props) {

  //props

  // props.thumnailUrlList = list of  thumbnail urls
  // props.urlList = list of urls
  // local state highlighted url index
  //method to change highlighted url




  return (
    <div>
      {/* button */}
      <div className='slogan'> Product Slogan </div>

      <div className='description'>
        ProductDescription
      </div>
      {/* button */}
      <div className='feature-list'> FeatureList </div>
    </div>

  );
};

export default ProductDescription;

/*
 Test does slogan appear in component
 Test does description appear in component
 Test does feature list appear in component
*/