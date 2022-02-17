import React from 'react';

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.moreReview = this.moreReview.bind(this);
  }

  moreReview(reviewId, fullReview) {
    //Change the HTML content of a <p> element with id="x":
    document.getElementById(reviewId).innerHTML = fullReview;
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

    return (
      <div>
        <div className='review'>{new Date(this.props.review.date).toLocaleString('en-US', {month: 'long', day: '2-digit', year: 'numeric'})}</div>
        <div>
          {summary}
        </div>
        <div>{fullReview}</div>
        <br></br>
      </div>

    );
  }




}

export default IndividualReview;