import React from 'react';
import axios from 'axios';
import StarRating from '../starRating.jsx';
import styled from 'styled-components';
import ReviewPhoto from './reviewPhoto.jsx';

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      helpfulRating: false
    };
    this.moreReview = this.moreReview.bind(this);
    this.helpfulRating = this.helpfulRating.bind(this);
  }

  moreReview(reviewId, fullReview) {
    //Change the HTML content of a <p> element with id="x":
    document.getElementById(reviewId).innerHTML = fullReview;
  }

  helpfulRating(event) {
    event.preventDefault();
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
      response =
      <ResponseWrapper>
        <ResponseTitle>Response:</ResponseTitle>
        <Response>{review.response}</Response>
      </ResponseWrapper>;
    }


    return (
      <Review>
        <TopInfo>
          <StarWrapper>
            <StarRating rating = {this.props.review.rating}/>
          </StarWrapper>
          <UserDate>
            {review.reviewer_name + ','}
            {' ' + new Date(this.props.review.date).toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric'})}
          </UserDate>
        </TopInfo>

        <Summary>{summary}</Summary>
        <ReviewBody>{fullReview}</ReviewBody>

        <div className='image'>
          {review.photos.map((photo)=> {
            return (
              <ReviewPhoto url={photo.url} key = {photo.id}/>
            );
          })}
        </div>

        <Recommend>{recommend}</Recommend>
        {response}

        <Helpful>
          Helpful?
          <a href='#'onClick = {
            this.helpfulRating
          }> Yes</a>
          ({review.helpfulness})
        </Helpful>

        <br></br>
      </Review>

    );
  }

}

const Review = styled.div`
  margin-top: 10px;
  display: grid;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #404040;
  border-bottom: 1.2px solid #404040;
`;

const TopInfo = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
`;

const StarWrapper = styled.div`
  display: inline-block;
  float: left;
`;

const UserDate = styled.div`
  display: inline-block;
  float: right;
  font-size: 12px;
  font-weight: 100;
  margin-top: 4px;
`;

const Summary = styled.div`
  display: grid;
  grid-template-columns: auto 250px;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: bold;
  font-size: 18px;
`;

const ReviewBody = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  font-weight: normal;
`;

const Recommend = styled.div`
  padding-top: 5px;
  padding-bottom: 10px;
  font-size: 16px;
  font-weight: normal;
`;

const ResponseWrapper = styled.div`
  display: grid;
  grid-template-rows: fit-content(190px);
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #F2F2F2
`;

const ResponseTitle = styled.div`
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  font-size: 16px;
  font-weight: bold;
`;

const Response = styled.div`
  padding-bottom: 5px;
  padding-left: 5px;
  font-size: 16px;
`;

const Helpful = styled.div`
  padding-top: 10px;
  padding-bottom: 5px;
  font-size: 16px;
`;

export default IndividualReview;