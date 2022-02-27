//rating section top level component
import React from 'react';
import RatingBar from './ratingBreakdown.jsx';
import styled from 'styled-components';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //ratingBreakdown: []
    };
  }

  render() {

    return (
      <div>
        <RatingBar stars = {5} percent = {this.props.ratingBreakdown[4]}/>
        <RatingBar stars = {4} percent = {this.props.ratingBreakdown[3]}/>
        <RatingBar stars = {3} percent = {this.props.ratingBreakdown[2]}/>
        <RatingBar stars = {2} percent = {this.props.ratingBreakdown[1]}/>
        <RatingBar stars = {1} percent = {this.props.ratingBreakdown[0]}/>
      </div>
    );

  }


}

export default Ratings;