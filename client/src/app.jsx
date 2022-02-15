import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './overview/Overview.jsx';
import QA from './qa/QA.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello TeamGreen Test</h1>
        <Overview />
        {/* temporary hard-coding of product_id for QA */}
        <QA product_id={64624} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));