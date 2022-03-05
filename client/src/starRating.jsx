import React from 'react';


const StarRating = (props) => {
  // need to figure out correct equation -> now filling out star based on percentage
  //TODO: the visual rating should be representative of up to a quarter of a veview point
  //ex:3.8 should display 3+3/4 (=3.75), now displaying 3.8
  let rating = {'--rating': props.rating / 5};
  return (
    <div className="Stars" style={rating}></div>
  );


};

export default StarRating;
