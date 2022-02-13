import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/Overview.jsx';
import QA from './qa/QA.jsx';
import ReviewList from './reviews/reviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello TeamGreen Test</h1>
        <Overview></Overview>
        <QA></QA>
        <ReviewList></ReviewList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));