import React from 'react';
import Modal from './Modal.jsx';
import axios from 'axios';

class AddNewReview extends React.Component {
//will be called in reviewList (widget top level component)

  constructor (props) {
    super(props);
    this.state = {
      productId: this.props.productId,
      show: false,
      hoverRating: [0, 0, 0, 0, 0],
      rating: 0,
      displayText: null,
      recommend: null
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.recommendChange = this.recommendChange.bind(this);
  }

  showModal () {
    this.setState({show: true});
  }

  hideModal () {
    this.setState({show: false});
  }

  recommendChange (event) {
    let answer = event.target.value;
    let booleanValue = (answer === 'true');
    this.setState({recommend: booleanValue});
  }

  render() {

    let starText = ['1 star - "Poor"', '2 stars - "Fair', ' 3 stars - "Average"', '4 stars - "Good"', '5 stars - "Great"'];

    let star1 =
    this.state.hoverRating[0] === 0 ?
      <span className="fa fa-star-o" aria-hidden="true" onClick = {() => { this.setState({ hoverRating: [1, 0, 0, 0, 0], rating: 1, displayText: starText[0]}); }}/> :
      <span className="fa fa-star" aria-hidden="true"/>;

    let star2 =
    this.state.hoverRating[1] === 0 ?
      <span className="fa fa-star-o" aria-hidden="true" onClick = {() => { this.setState({ hoverRating: [1, 1, 0, 0, 0], rating: 2, displayText: starText[1]}); }}/> :
      <span className="fa fa-star" aria-hidden="true"/>;

    let star3 =
      this.state.hoverRating[2] === 0 ?
        <span className="fa fa-star-o" aria-hidden="true" onClick = {() => { this.setState({ hoverRating: [1, 1, 1, 0, 0], rating: 3, displayText: starText[2]}); }}/> :
        <span className="fa fa-star" aria-hidden="true"/>;

    let star4 =
      this.state.hoverRating[3] === 0 ?
        <span className="fa fa-star-o" aria-hidden="true" onClick = {() => { this.setState({ hoverRating: [1, 1, 1, 1, 0], rating: 4, displayText: starText[3]}); }}/> :
        <span className="fa fa-star" aria-hidden="true"/>;

    let star5 =
      this.state.hoverRating[4] === 0 ?
        <span className="fa fa-star-o" aria-hidden="true" onClick = {() => { this.setState({ hoverRating: [1, 1, 1, 1, 1], rating: 5, displayText: starText[4]}); }}/> :
        <span className="fa fa-star" aria-hidden="true"/>;

    return (
      <div>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <form>
            <h1>Write Your Review </h1>
            <h3>About the {this.props.product_name}</h3>
            <div>
              <div>Rating*</div>
              {star1} {star2} {star3} {star4} {star5} {this.state.displayText}
              <div>Do you recommend this product? *</div>
              <input type = 'radio' id = 'yes' name = 'recommend' value={true} onClick = {this.recommendChange}></input>
              <label htmlFor = 'yes'> Yes </label>
              <input type = 'radio' id = 'no' name = 'recommend' value={false} onClick = {this.recommendChange}></input>
              <label htmlFor = 'no'> No </label>
            </div>
          </form>

        </Modal>
        <button onClick = {this.showModal}>ADD A REVIEW</button>
      </div>
    );
  }
}


export default AddNewReview;