import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/Overview.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import QA from './qa/QA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>TeamGreen!</h1>
        <Overview></Overview>
        <RelatedProducts></RelatedProducts>
        <QA></QA>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));