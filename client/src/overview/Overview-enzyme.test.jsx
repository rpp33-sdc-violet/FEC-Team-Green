import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Overview from './Overview';

configure({ adapter: new Adapter() });

describe('Overview', () => {
  test('Overview component renders', () => {
    const heading = shallow(
      <Overview />
    );

    expect(heading.find('h3').text()).toEqual('Overview');
  });
});