import App from './app.jsx';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import pd from './overview/components/details/ProductDescription.jsx';

import React from 'react';
import ReactDOM from 'react-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line camelcase
      product_id: 64622
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return <Router>
      <Routes>
        <Route path='/'element={<App />} >
        </Route>
        <Route path='/:productId'element={<App/>}></Route>
      </Routes>
    </Router>;
  }
}


ReactDOM.render(<Main />, document.getElementById('app'));