import React from 'react';
import axios from 'axios';
import reviewSample from './exampleData.js';
import IndividualReview from './individualReview.jsx';
class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: props.product_id,
      reviews: reviewSample,
      displayReviews: null,
      displayCount: 2
    };
  }
  componentDidMount() {
    this.getReviews();
  }

  getReviews() {
    axios.get('/api/reviews', {
      params: {
        product_id: this.state.productId
      }
    })
      .then((res) => {
        //console.log('axios get reviews', res);
        this.setState({reviews: res.data.results, displayReviews: res.data.results});

      })
      .catch((err) => {
        console.log('failed to get reviews', err.message);
      });
  }


  render() {
    //TODO:slice displayreviews based on displaycount
    return (

      <div>
        <h3>Review List</h3>
        {this.state.reviews.map((review) => {
          return (
            <IndividualReview review = {review} key = {review.review_id} />
          );
        })}
      </div>
    );
  }



}


export default ReviewList;