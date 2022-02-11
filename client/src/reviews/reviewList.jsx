import React from 'react';
import reviewSample from './exampleData.js';
import IndividualReview from './individualReview.jsx'
class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: reviewSample
    };
  }

  render() {
    return (

      <div>
        {this.state.reviews.map((review) => {
          return(
            <IndividualReview review = {review} />
          )
        })}
      </div>
    )
  }





}


export default ReviewList;