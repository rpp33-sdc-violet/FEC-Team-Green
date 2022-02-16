import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import QA from '../QA';

configure({ adapter: new Adapter() });

describe('QA', () => {
  test('QA component renders', () => {
    const heading = shallow(
      <QA />
    );

    expect(heading.find('h3').text()).toEqual('QUESTIONS & ANSWERS');
  });
});