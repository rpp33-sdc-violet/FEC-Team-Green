
import React from 'react';
import ReactDOM from 'react-dom';
import './appStyles/style.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import Overview from './overview/Overview.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import QA from './qa/QA.jsx';
import ReviewList from './reviews/reviewList.jsx';
import exampleProductData from './data/exampleProductData.js';
import exampleStyleData from './data/exampleStyleData.js';
import axios from 'axios';
// CHANGE REQUEST - import HOC
import withInteractions from './utils/withInteractions.jsx';
// CHANGE REQUEST - container component with HOC and QA widget
const QAwithInteractions = withInteractions(QA, 'Questions & Answers');


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
  getProductStylesData(productId) {

    axios.get(`/api/products/${productId}/styles`
    ).then((resp) => {
      this.setState({ productStyles: resp.data.results }, () => { console.log('STYLE DATA', this.state.productStyles); });
      // eslint-disable-next-line camelcase
      this.setState({product_id: productId});
    }).catch(err => {
      console.log('error fetching style data', err);
    });
  }
  componentDidMount() {
    // eslint-disable-next-line camelcase
    this.getProductData(this.state.product_id);
  }//64669
  searchProductID(query) {
    console.log('query', query);
    this.getProductData(query);
  }
  handleChange(event) {
    this.setState({search: event.target.value});
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
          <div>loading</div>}
        <RelatedProducts data={{ productID: '007' }}></RelatedProducts>
        {/* <QA product_id={this.state.product_id} product_name={this.state.product.name}></QA> */}
        <QAwithInteractions product_id={this.state.product_id} product_name={this.state.product.name} /> 
        <ReviewList product_id={64621}></ReviewList>

      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));