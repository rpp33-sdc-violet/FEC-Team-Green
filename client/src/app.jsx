
import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/Overview.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import QA from './qa/QA.jsx';
import ReviewList from './reviews/reviewList.jsx';
import exampleProductData from './data/exampleProductData.js';
import exampleStyleData from './data/exampleStyleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello TeamGreen Test</h1>
        <Overview product={exampleProductData[0]} productStyle={exampleStyleData}></Overview>
        <RelatedProducts data={{productID: '007'}}></RelatedProducts>
        <QA product_id={64624}></QA>
        <ReviewList product_id={64621}></ReviewList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));