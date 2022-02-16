import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/Overview.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import QA from './qa/QA.jsx';
import ReviewList from './reviews/reviewList.jsx';
import exampleProductData from './data/exampleProductData.js';
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello TeamGreen Test</h1>
        <Overview data={exampleProductData[0]}></Overview>
        <RelatedProducts data={{productID: '007'}}></RelatedProducts>
        <QA product_id={64624}></QA>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));