import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Search from '../components/Search.jsx';

configure({ adapter: new Adapter() });

describe('SEARCH', () => {
  const wrap = shallow(
    <Search />
  );

  
});