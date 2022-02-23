import React from 'react';


class AddNewReview extends React.Component {
//will be called in reviewList (widget top level component)

  constructor (props) {
    super(props);
    this.state = {
      productId: this.props.productId
    };
  }
  render() {
    return (
      <button>ADD A REVIEW</button>
    );
  }
}
export default AddNewReview;