
import React from 'react';
import ReactDOM from 'react-dom';
import './appStyles/style.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import Overview from './overview/overview.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import QA from './qa/QA.jsx';
import ReviewList from './reviews/reviewList.jsx';
import exampleProductData from './data/exampleProductData.js';
import exampleStyleData from './data/exampleStyleData.js';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import withParamsAndNavigate from './hoc.js';

// CHANGE REQUEST - import HOC
import withInteractions from './utils/withInteractions.jsx';
// CHANGE REQUEST - container component with HOC and QA widget
const QAwithInteractions = withInteractions(QA, 'Questions & Answers');
const ReviewsWithIntercations = withInteractions(ReviewList, 'Reviews');

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
        this.setState({product_id: productId});
        this.props.navigate(`/${productId}`);

      });

    }).catch(err => {
      console.log('error fetching style data', err);
    });
  }

  componentDidMount() {
    // eslint-disable-next-line camelcase
    this.props.params.productId ? this.setState({product_id: this.props.params.productId}, ()=> {
      this.getProductData(this.state.product_id);
    }) : this.getProductData(this.state.product_id);

  }//64669
  searchProductID(query) {
    this.getProductData(query);
  }
  handleChange(event) {
    this.setState({search: event.target.value});
  }

  componentDidUpdate() {

  }
  render() {

    return (
      <div>
        <nav id={'navbar'}>
          <p className='logo'>Logo</p>
          <form>
            <input value={this.state.search} onChange={this.handleChange}></input>
          </form>
          <BiSearchAlt2 className={'searchIcon'} onClick={(event) => {
            // event.preventDefault();
            this.searchProductID(this.state.search);
          }}viewBox={[0, 0, 24, 21]} />
        </nav>
        {this.state.product && this.state.productStyles.length > 1 ?
          <Overview product={this.state.product} productStyles={this.state.productStyles}></Overview> :
          <div className='overview-skeleton'>loading</div>}
        <RelatedProducts data={{ productID: '007' }}></RelatedProducts>


        {/* <QA product_id={this.state.product_id} product_name={this.state.product.name}></QA> */}
        <QAwithInteractions product_id={this.state.product_id} product_name={this.state.product.name} />

        {this.state.product_id && this.state.product.name ?
          <ReviewsWithIntercations product_id={this.state.product_id} product_name={this.state.product.name}></ReviewsWithIntercations> :
          <div className='reviews'>loading reviews</div>
        }


      </div>
    );
  }
}
export default withParamsAndNavigate(App);
// ReactDOM.render(<App />, document.getElementById('app'));