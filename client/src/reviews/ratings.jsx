//rating section top level component
import React from 'react';

class Ratings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratingBreakdown: []
    };
  }

  componentDidMount() {
    this.ratingBreakdown(this.props.metaData);
  }

  ratingBreakdown(metaData) {
    let ratingMeta = this.props.metaData.ratings;
    console.log('ratingMeta', ratingMeta);
    let ratingValues = Object.values(ratingMeta);
    let sum = 0;
    ratingValues.map((rating) => {
      sum += parseInt(rating);
    });

    let breakdown = [0, 0, 0, 0, 0];
    let counter = 1;
    // TODO: replace the below code with loop, this is not acceptable
    if (ratingMeta['1']) {
      breakdown[0] = parseInt(ratingMeta['1']) / sum * 100;
    }
    if (ratingMeta['2']) {
      breakdown[1] = parseInt(ratingMeta['2'] / sum * 100);
    }
    if (ratingMeta['3']) {
      breakdown[2] = parseInt(ratingMeta['3'] / sum * 100);
    }
    if (ratingMeta['4']) {
      breakdown[3] = parseInt(ratingMeta['4'] / sum * 100);
    }
    if (ratingMeta['5']) {
      breakdown[4] = parseInt(ratingMeta['5'] / sum * 100);
    }

    this.setState({ratingBreakdown: breakdown});
  }


  render() {

    return (
      <div>
        Rating bar and factor bar go here
      </div>
    );

  }


}


export default Ratings;