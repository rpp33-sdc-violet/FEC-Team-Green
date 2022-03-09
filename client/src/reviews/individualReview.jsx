import React from 'react';
import axios from 'axios';
import StarRating from '../starRating.jsx';
import styled from 'styled-components';

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulRating: false
    };
    this.moreReview = this.moreReview.bind(this);
  }

  moreReview(reviewId, fullReview) {
    //Change the HTML content of a <p> element with id="x":
    document.getElementById(reviewId).innerHTML = fullReview;
  }

  helpfulRating(event) {
    if (this.state.helpfulRating === false) {
      let path = `/api/reviews/${this.props.review.review_id}/helpful`;
      axios.put(path).then(() => {
        this.props.review.helpfulness++;//no need to make another get request for now
        this.setState({helpfulRating: true});
      });
    }
  }

  render() {
    let review = this.props.review;
    let summary = review.summary;
    let fullReview = null;
    let reviewId = review.review_id;
    if (summary.length > 60) {
      summary = summary.substring(0, 60) + '...';
    }

    let reviewBody = review.body;

    //let reviewBody = 'long reivew test long reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew testlong reivew test';
    if (reviewBody.length > 250) {
      reviewBody = reviewBody.substring(0, 250);
      fullReview = <div>
        <div className ='reviewBody' id = {reviewId}>{reviewBody}</div>
        <a href='#' onClick = {() => { this.moreReview(reviewId, review.body); }}>Show more</a>
      </div>;
    } else {
      fullReview = <div>{reviewBody}</div>;
    }

    let recommend = null;
    if (review.recommend) {
      recommend =
      <div>
        ✓ I recommend this product
      </div>;

    }

    let response = null;
    if (review.response) {
      response = <div>
        <div>Response from seller:</div>
        <div>{review.response}</div>
      </div>;
    }


    return (
      <Review>
        <TopInfo>
          <StarRating rating = {this.props.review.rating}/>
          <span>{review.reviewer_name + ','}</span>
          <span className='review'>{' ' + new Date(this.props.review.date).toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric'})}</span>
        </TopInfo>

        <div>
          {summary}
        </div>
        <div>{fullReview}</div>
        <div className='image'>
          {review.photos.map((photo)=> {
            //TODO: NEED TO BUILD A MODEL TO OPEN IMAGE IN MODAL WINDOW
            //CAN BE SHARED WITH QA COMPONENTS AND MORE
            return (
              'console.log("photo url", photo.url)'
            );
          })}
        </div>
        <br></br>
        <div>{recommend}</div>
        <div>{response}</div>
        <div>
          Helpful?
          <a href='#'onClick = {() => {
            this.helpfulRating();
          }}>Yes</a>
          ({review.helpfulness})
        </div>

        <br></br>
      </Review>

    );
  }

}

const Review = styled.div`
  margin-top: 10px;
  display: grid;
  max-height: 540px;
  color: #404040;
`;

const TopInfo = styled.div`
  display: grid;
  grid-template-columns: auto 250px;
  padding-top: 5px;
  padding-bottom: 5px;
`;
export default IndividualReview;