import React from 'react';
import axios from 'axios';
import reviewSample from './exampleData.js';
import IndividualReview from './individualReview.jsx';
import AddNewReview from './addNewReview.jsx';
import Ratings from './ratings.jsx';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.product_id,
      reviews: [],
      metaData: {},
      displayCount: 2,
      buttonVisible: true,
      sort: 'relevant'
    };
    this.loadReviews = this.loadReviews.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
  }

  componentDidMount() {
    this.getReviews(this.state.sort);
    this.getMetaData();
  }

  getReviews(currentOption) {
    axios.get('/api/reviews', {
      params: {
        // eslint-disable-next-line camelcase
        product_id: this.state.productId,
        //sort: this.state.sort
        //option has to be an input in getReviews function, otherwise  option is not updated as expected
        //(it would be user's last selection)  setState() as a request rather than an immediate command to update the component

        sort: currentOption
      }
    })
      .then((res) => {
        //console.log('axios get reviews', res);
        this.setState({reviews: res.data.results});

      })
      .catch((err) => {
        console.log('failed to get reviews', err.message);
      });
  }

  getMetaData() {
    axios.get('/api/reviews/meta', {
      params: {
        // eslint-disable-next-line camelcase
        product_id: this.state.productId
      }
    })
      .then((res) => {
        this.setState({metaData: res.data});
      });
  }

  loadReviews() {
    if (this.state.displayCount <= this.state.reviews.length) {
      this.setState({displayCount: this.state.displayCount + 2});
    } else {
      this.setState({buttonVisible: false});
    }
  }

  sortReviews(option) {
    this.setState({sort: option});
    this.getReviews(option);
  }


  render() {
    //slice displayed reviews based on displaycount
    let currentReviews = [];
    if (this.state.reviews) {
      currentReviews = this.state.reviews.slice(0, this.state.displayCount);
    }

    let moreReviewButton = null;
    if (this.state.buttonVisible && this.state.reviews.length > 2) {
      moreReviewButton = <button onClick = {this.loadReviews}>MORE REVIEWS</button>;
    }

    //if no reviews submitted, list collapse, 'submit new review' button will appear near the top
    if (this.state.reviews.length === 0) {
      return (
        <div>
          <h3>Review List</h3>
          <AddNewReview productId = {this.state.productId}/>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Review List</h3>
          <h3>RATINGS and REVIEWS</h3>
          <Ratings metaData = {this.state.metaData}/>




          <select onChange = {() => { this.sortReviews(event.target.value); }}>
            <option value="relevane">relevant</option>
            <option value="newest">newest</option>
            <option value="helpful">helpful</option>
          </select>
          <br></br>
          <div>
            {currentReviews.map((review) => {
              return (
                <IndividualReview review = {review} key = {review.review_id} />
              );
            })}
          </div>
          <div>
            {moreReviewButton}
            <AddNewReview productId = {this.state.productId}/>
          </div>
        </div>
      );
    }




  }



}


export default ReviewList;