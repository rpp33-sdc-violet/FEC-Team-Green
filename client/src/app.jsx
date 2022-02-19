
import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/Overview.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import QA from './qa/QA.jsx';
import ReviewList from './reviews/reviewList.jsx';
import exampleProductData from './data/exampleProductData.js';
import exampleStyleData from './data/exampleStyleData.js';
import axios from 'axios';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
      productStyles: [],
    };
  }

  getProductData(productId) {

    axios.get(`/api/products/${productId}/`
    ).then((resp) => {
      this.setState({ product: resp.data },
        () => { console.log('PRODUCT DATA', this.state.product); });
    }).catch(err => {
      console.log('error fetching product data', err);
    });
  }
  getProductStylesData(productId) {

    axios.get(`/api/products/${productId}/styles`
    ).then((resp) => {
      this.setState({ productStyles: resp.data.results }, () => { console.log('STYLE DATA', this.state.productStyles); });

    }).catch(err => {
      console.log('error fetching style data', err);
    });
  }
  componentDidMount() {
    // eslint-disable-next-line camelcase
    const product_id = 64622;
    this.getProductData(product_id);
    this.getProductStylesData(product_id);

  }
  render() {
    if (this.state.product && this.state.productStyles.length > 1) {
      return (
        <div>
          <h1>Logo</h1>
          <Overview product={this.state.product} productStyles={this.state.productStyles}></Overview>
          <RelatedProducts data={{ productID: '007' }}></RelatedProducts>
          <QA product_id={64624}></QA>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Logo</h1>
          {/* <Overview product={this.state.product} productStyles={this.state.productStyles}></Overview> */}
          <div>loading</div>
          <RelatedProducts data={{ productID: '007' }}></RelatedProducts>
          <QA product_id={64624}></QA>
        </div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));