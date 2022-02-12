import React from 'react';

class IndividualReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        {this.props.review.summary}
      </div>
    );
  }




}

export default IndividualReview;