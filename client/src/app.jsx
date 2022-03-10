import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './appStyles/style.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';

// using React.lazy for code-splitting/optimization. See https://reactjs.org/docs/code-splitting.html for more info. 
const Overview = React.lazy(() => import('./overview/overview.jsx'));
const QA = React.lazy(() => import('./qa/QA.jsx'));
const ReviewList = React.lazy(() => import('./reviews/reviewList.jsx'));

import exampleProductData from './data/exampleProductData.js';
import exampleStyleData from './data/exampleStyleData.js';
import axios from 'axios';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withParamsAndNavigate from './utils/withParamsAndNavigate.js';

// CHANGE REQUEST - import HOC
import withInteractions from './utils/withInteractions.jsx';
// CHANGE REQUEST - container component with HOC and QA widget
const QAwithInteractions = withInteractions(QA, 'Questions & Answers');
const OverviewWithInteractions = withInteractions(Overview, 'Overview');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      productStyles: [],
      search: '',
      // eslint-disable-next-line camelcase
      product_id: 64622
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  getProductData(productId) {
    axios.get(`/api/products/${productId}/`
    ).then((resp) => {
      this.setState({ product: resp.data },
        () => { console.log('PRODUCT DATA', this.state.product); });

    }).then(() => {
      this.getProductStylesData(productId);
    }).catch(err => {
      console.log('error fetching product data', err);
    });
  }

  // if this function is successful it will set the product id and change the url
  getProductStylesData(productId) {
    axios.get(`/api/products/${productId}/styles`
    ).then((resp) => {
      this.setState({ productStyles: resp.data.results }, () => {
        console.log('STYLE DATA', this.state.productStyles);
        // eslint-disable-next-line camelcase
        this.setState({ product_id: productId });
        this.props.navigate(`/${productId}`);
      });
    }).catch(err => {
      console.log('error fetching style data', err);
    });
  }

  componentDidMount() {
    // eslint-disable-next-line camelcase
    this.props.params.productId ? this.setState({ product_id: this.props.params.productId }, () => {
      this.getProductData(this.state.product_id);
    }) : this.getProductData(this.state.product_id);
  }

  searchProductID(query) {
    this.getProductData(query);
  }

  handleChange(event) {
    this.setState({ search: event.target.value });
  }

  handleKeyDown(event) {
    if (event.code === 'Enter') {
      event.preventDefault();
      this.searchProductID(this.state.search);
    }
  }

  render() {
    return (
      <div>
        <nav id={'navbar'}>
          <p className='logo'>Logo</p>
          <form>
            <input value={this.state.search} onChange={this.handleChange} onKeyDown={this.handleKeyDown}></input>
          </form>
          <BiSearchAlt2 className={'searchIcon'} onClick={(event) => {
            // event.preventDefault();
            this.searchProductID(this.state.search);
          }} viewBox={[0, 0, 24, 21]} />
        </nav>
        {/* for code-splitting, fallback attribute is needed */}
        <Suspense fallback={<div>loading</div>}>
          {this.state.product && this.state.productStyles.length > 1 ?
            <OverviewWithInteractions product={this.state.product} productStyles={this.state.productStyles}></OverviewWithInteractions> :
            <div className='overview-skeleton'>loading</div>}
          {this.state.product && this.state.productStyles.length > 1 ?
            <QAwithInteractions product_id={this.state.product_id} product_name={this.state.product.name} /> :
            <div className="QA-container">loading</div>}
          <ReviewList product_id={this.state.product_id} product_name={this.state.product.name}></ReviewList>
        </Suspense>
      </div>
    );
  }
}

export default withParamsAndNavigate(App);