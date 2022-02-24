import React from 'react';


const StarRating = (props) => {

  //render size, width, comfort, quality, length and fit factor bar
  return (
    <div className="Stars" style={{rating: '2.3'}} aria-label="Rating of this product is 2.3 out of 5."></div>
  );


};

export default StarRating;

//style={{color: "red"}}