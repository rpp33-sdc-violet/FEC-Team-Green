import React from 'react';
import axios from 'axios';
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
    axios.get('/violet-reviews/reviews', {
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
        console.log('axios get reviews', res.data.results);
        this.setState({ reviews: res.data.results, displayReviews: res.data.results });

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
        this.setState({ metaData: res.data });
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
    this.setState({ ratingBreakdown: breakdown, recAvg: recommendavg, charac: characteristics });
  }

  loadReviews() {
    if (this.state.displayCount <= this.state.reviews.length) {
      this.setState({ displayCount: this.state.displayCount + 2 });
    } else {
      this.setState({ buttonVisible: false });
    }
  }

  sortReviews(option) {
    this.setState({ sort: option });
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

    this.setState({ filtersOn: tempfiltersOn }, () => {
      let tempFilters = this.state.filters;
      if (this.state.filtersOn[index]) {
        let tempFilters = this.state.filters.push(rating);
      } else {
        let index = this.state.filters.indexOf(rating);
        let tempFilters = this.state.filters.splice(index, 1);
      }
      //console.log('tempFilters', tempFilters);
      this.setState({ filters: tempFilters }, () => {
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
    this.setState({ displayReviews: tempReviews });
  }

  removeAllFilters(event) {
    event.preventDefault();
    this.setState({ filters: [], displayReviews: this.state.reviews, filtersOn: [false, false, false, false, false] } );
  }



  render() {
    //slice displayed reviews based on displaycount
    let currentReviews = [];
    if (this.state.reviews) {
      currentReviews = this.state.displayReviews.slice(0, this.state.displayCount);
    }

    // *****TRIAL: DARK MODE*****
    let moreReviewButton = null;
    if (this.state.buttonVisible && this.state.displayReviews.length > 2 && this.props.theme === 'light-theme') {
      moreReviewButton = <MoreReview onClick={this.loadReviews}>MORE REVIEWS</MoreReview>;
    }
    if (this.state.buttonVisible && this.state.displayReviews.length > 2 && this.props.theme === 'dark-theme') {
      moreReviewButton = <MoreReviewDark onClick={this.loadReviews}>MORE REVIEWS</MoreReviewDark>;
    }

    let backgroundColor = null;
    let color = null;
    if (this.props.theme === 'light-theme') {
      backgroundColor = '#fff';
      color = '#222';
    }
    if (this.props.theme === 'dark-theme') {
      backgroundColor = '#121212';
      color = '#7ACC7A';
    }

    let removeFilter = null;
    let displayFilters = null;
    let currentFilters = this.state.filters;
    //console.log('currentFitlers', currentFilters);
    if (this.state.filters.length >= 1) {
      displayFilters = <Filter>Current Filters:
        {currentFilters.map((filter) => {
          return (
            ` ${filter} `
          );
        })}
         stars</Filter>;
      removeFilter = <a href='#'onClick = {this.removeAllFilters}>Remove all filters</a>;
    }

    //if no reviews submitted, list collapse, 'submit new review' button will appear near the top
    if (this.state.reviews.length === 0) {
      return (
        <NoReview>
          <div>RATINGS & REVIEWS</div>
          <br></br>
          <AddNewReview productId = {this.state.productId} theme={this.props.theme}/>
        </NoReview>
      );
    } else {
      return (
        <ReviewsContainer onClick={this.props.interactions}>
          <RatingandReviews>
            <RatingWrapper>
              <RatingHeader>RATINGS & REVIEWS</RatingHeader>
              {displayFilters}
              {removeFilter}
              <Ratings metaData={this.state.metaData} ratingBreakdown={this.state.ratingBreakdown} filters={this.filterReviews} recAvg={this.state.recAvg} charc={this.state.chrac} />
              <ProductBreakdown charac={this.state.charac} />
            </RatingWrapper>

            <Wrapper>
              <ReviewWrapper>
                <SelectWrapper>
                  {this.state.displayReviews.length} reviews, sorted by
                  <Select onChange = {() => { this.sortReviews(event.target.value); }} backgroundColor={backgroundColor} color={color}>
                    <option value="relevane">relevance</option>
                    <option value="newest">newest</option>
                    <option value="helpful">helpful</option>
                  </Select>
                </SelectWrapper>
                <div>
                  {currentReviews.map((review) => {
                    return (
                      <IndividualReview review={review} key={review.review_id} theme={this.props.theme} />
                    );
                  })}
                </div>
              </ReviewWrapper>
              <Button>
                <BWrapper>
                  {moreReviewButton}
                  <AddNewReview productId={this.state.productId} product_name={this.props.product_name} charac={this.state.charac} theme={this.props.theme}> </AddNewReview>
                </BWrapper>
              </Button>
            </Wrapper>
          </RatingandReviews>
        </ReviewsContainer>
      );
    }

  }
}
const ReviewsContainer = styled.div`
`;

const NoReview = styled.div`
  display: grid;
  font-size: 16px;
  font-weight: 100;
  max-height: 540px;
  margin: 80px 60px 80px;
  color: #404040;
  position: relative;
  z-index: 21;
`;

const RatingandReviews = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  justifyContent: 'center';
  margin: 40px 60px 40px;
  alightItems: 'center';
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
  margin-top: 10px;
  grid-template-columns: 180px 250px;
`;

const MoreReview = styled.button`
  background: none;
  border: 1px solid #404040;
  font-weight: bold;
  margin-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const RatingHeader = styled.div`
  font-size: 16px;
  font-weight: 100;
  padding-top: 10px;
  padding-bottom: 10px;
}
`;

const Filter = styled.div`
  font-size: 16px;
  color: #404040;
  margin-bottom: 10px;
`;

const SelectWrapper = styled.div`
  font-weight: bold;
  font-size: 18px;
  padding-top: 55px;
`;

const Select = styled.select`
  border: none;
  text-decoration: underline;
  font-size: 18px;
  font-weight: bold;
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
`;

// *****TRIAL: DARK MODE*****
const MoreReviewDark = styled.button`
  background: #121212;
  border: 1px solid #7ACC7A;
  font-weight: bold;
  margin-right: 20px;
  color: #7ACC7A;
  padding-top: 15px;
  padding-bottom: 15px;
`;
//for commit

export default ReviewList;

