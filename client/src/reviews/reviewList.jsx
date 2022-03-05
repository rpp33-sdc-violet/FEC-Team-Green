import React from 'react';
import axios from 'axios';
import reviewSample from './exampleData.js';
import IndividualReview from './individualReview.jsx';
import AddNewReview from './addNewReview.jsx';
import Ratings from './ratings.jsx';
import ProductBreakdown from './productBreakdown.jsx';
import styled from 'styled-components';

class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productId: this.props.product_id,
      reviews: [],
      displayReviews: [],
      metaData: {},
      ratingBreakdown: [],
      displayCount: 2,
      buttonVisible: true,
      sort: 'relevant',
      filters: [],
      filtersOn: [false, false, false, false, false],
      recAvg: 0,
      charac: {}
    };
    this.loadReviews = this.loadReviews.bind(this);
    this.sortReviews = this.sortReviews.bind(this);
    this.filterReviews = this.filterReviews.bind(this);
    this.removeAllFilters = this.removeAllFilters.bind(this);
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

        sort: currentOption,
        count: 50
      }
    })
      .then((res) => {
        //console.log('axios get reviews', res);
        this.setState({reviews: res.data.results, displayReviews: res.data.results});

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
        this.ratingBreakdown(res.data);
      }).catch((err) => {
        console.log('failed to get meta data', err.message);
      });
  }

  ratingBreakdown(metaData) {
    let ratingMeta = metaData.ratings;
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
    //console.log('rating breakdown', breakdown);
    //this.setState({ratingBreakdown: breakdown});

    let recommend = metaData.recommended;
    let recommendavg = parseInt(recommend['true']) / (parseInt(recommend['true']) + parseInt(recommend['false']));

    let characteristics = metaData.characteristics;
    //console.log('charac', characteristics);
    this.setState({ratingBreakdown: breakdown, recAvg: recommendavg, charac: characteristics});
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

  /*toggleFilter() {
    this.setState({filtersOn: !this.state.filtersOn});
  }*/

  filterReviews(rating) {
    let index = parseInt(rating) - 1;
    let tempfiltersOn = this.state.filtersOn;
    tempfiltersOn[index] = !this.state.filtersOn[index];
    console.log('tempfilterOn', tempfiltersOn);

    this.setState({filtersOn: tempfiltersOn}, () => {
      let tempFilters = this.state.filters;
      if (this.state.filtersOn[index]) {
        let tempFilters = this.state.filters.push(rating);
      } else {
        let index = this.state.filters.indexOf(rating);
        let tempFilters = this.state.filters.splice(index, 1);
      }
      //console.log('tempFilters', tempFilters);
      this.setState({filters: tempFilters}, () => {
        this.filterHelper(this.state.filters);
      });
    });
  }


  filterHelper(filters) {
    let tempReviews = [];
    if (filters.length === 0) {
      tempReviews = this.state.reviews;
    } else {
      this.state.reviews.map((review) => {
        for (let i = 0; i < filters.length; i++) {
          if (review.rating === filters[i]) {
            tempReviews.push(review);
            break;
          }
        }
      });
    }
    this.setState({displayReviews: tempReviews});
  }

  removeAllFilters() {
    this.setState({filters: [], displayReviews: this.state.reviews, filtersOn: [false, false, false, false, false]} );
  }



  render() {
    //slice displayed reviews based on displaycount
    let currentReviews = [];
    if (this.state.reviews) {
      currentReviews = this.state.displayReviews.slice(0, this.state.displayCount);
    }

    let moreReviewButton = null;
    if (this.state.buttonVisible && this.state.displayReviews.length > 2) {
      moreReviewButton = <MoreReview onClick = {this.loadReviews}>MORE REVIEWS</MoreReview>;
    }

    let removeFilter = null;
    let displayFilters = null;
    let currentFilters = this.state.filters;
    //console.log('currentFitlers', currentFilters);
    if (this.state.filters.length >= 1) {
      displayFilters = <div>Current Filters:
        {currentFilters.map((filter) => {
          return (
            ` ${filter}`
          );
        })}
         stars</div>;
      removeFilter = <a href='#'onClick = {() => {
        this.removeAllFilters();
      }}>Remove all filters</a>;
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
          <RatingandReviews>
            <RatingWrapper>
              <h3>RATINGS and REVIEWS</h3>
              {displayFilters}
              {removeFilter}
              <Ratings metaData = {this.state.metaData} ratingBreakdown = {this.state.ratingBreakdown} filters = {this.filterReviews} recAvg = {this.state.recAvg} charc = {this.state.chrac}/>
              <ProductBreakdown charac = {this.state.charac}/>
            </RatingWrapper>

            <Wrapper>
              <ReviewWrapper>
                <div>
                  <select onChange = {() => { this.sortReviews(event.target.value); }}>
                    <option value="relevane">relevant</option>
                    <option value="newest">newest</option>
                    <option value="helpful">helpful</option>
                  </select>
                </div>
                <div>
                  {currentReviews.map((review) => {
                    return (
                      <IndividualReview review = {review} key = {review.review_id} />
                    );
                  })}
                </div>
              </ReviewWrapper>
              <Button>
                <BWrapper>
                  {moreReviewButton}
                  <AddNewReview productId = {this.state.productId} product_name={this.props.product_name} charac = {this.state.charac}> </AddNewReview>
                </BWrapper>
              </Button>
            </Wrapper>
          </RatingandReviews>
        </div>
      );
    }

  }
}

const RatingandReviews = styled.div`
  display: flex;
  justifyContent: 'center';
  margin: 40px 60px 40px;
  alightItems: 'center'
`;

const RatingWrapper = styled.div`
  gridColumn: '1';
  gridRow: '1';
`;
const Wrapper = styled.div`
  gridcolumn: '2';
  margin-left: 60px;
`;

const ReviewWrapper = styled.div`
  gridColumn: '2';
  gridRow: '1';
  overflow: scroll;
  height: 50vh;
`;
//px for overflow height control does not work well...need view height %

const Button = styled.div`
  gridColumn: '2';
  gridRow: '2';
`;

const BWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px 180px;
  margin-top: 10px;
`;

const MoreReview = styled.button`
  background: none;
  border: 1px solid #404040;
  font-weight: bold;
  margin-right: 20px;
`;


export default ReviewList;

