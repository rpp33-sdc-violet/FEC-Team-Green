//rating section top level component
import React from 'react';
import RatingBar from './ratingBreakdown.jsx';
import styled from 'styled-components';
import StarRating from '../starRating.jsx';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //ratingBreakdown: []
      metaData: this.props.metaData
    };
  }




  render() {

    let percentArray = this.props.ratingBreakdown;
    let average = (percentArray[0] + percentArray[1] * 2 + percentArray[2] * 3 + percentArray[3] * 4 + percentArray[4] * 5) / 100;
    let averageRounded = Math.round(average * 10) / 10;

    let recAvg = Math.round(this.props.recAvg * 1000) / 10;

    return (
      <div>
        <Summary>
          <span>{averageRounded}</span>
          <StarRating rating = {averageRounded}/>
        </Summary>
        <Rec>{recAvg}% of reviews recommend this product</Rec>
        <RatingBar stars = {5} percent = {this.props.ratingBreakdown[4]} filters = {this.props.filters}/>
        <RatingBar stars = {4} percent = {this.props.ratingBreakdown[3]} filters = {this.props.filters}/>
        <RatingBar stars = {3} percent = {this.props.ratingBreakdown[2]} filters = {this.props.filters}/>
        <RatingBar stars = {2} percent = {this.props.ratingBreakdown[1]} filters = {this.props.filters}/>
        <RatingBar stars = {1} percent = {this.props.ratingBreakdown[0]} filters = {this.props.filters}/>
      </div>
    );

  }


}

export default Ratings;



const Summary = styled.div`
 font-size: 40px;
`;

const Rec = styled.div`

`;