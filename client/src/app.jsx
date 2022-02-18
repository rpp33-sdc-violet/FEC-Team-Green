import React from 'react';
import ReactDOM from 'react-dom';
import './appStyles/style.css';
import { BiSearchAlt2 } from 'react-icons/bi';
import Overview from './overview/Overview.jsx';
import RelatedProducts from './relatedProducts/RelatedProducts.jsx';
import QA from './qa/QA.jsx';
import ReviewList from './reviews/reviewList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav id={'navbar'}>
          <p className='logo'>LOGO</p>
          <form>
            <input></input>
          </form>
          <BiSearchAlt2 className={'searchIcon'} viewBox={[0, 0, 24, 21]}/>
        </nav>
        <h1>Hello TeamGreen Test</h1>
        <Overview></Overview>
        <RelatedProducts data={{productID: '007'}}></RelatedProducts>
        <QA product_id={64624}></QA>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));