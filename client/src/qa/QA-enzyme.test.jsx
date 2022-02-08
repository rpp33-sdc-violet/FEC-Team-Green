import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });
import QA from './QA';


test('QA component renders', () => {
  const heading = shallow(
    <QA />
  );

  expect(heading.find("h3").text()).toEqual('QUESTIONS & ANSWERS');
})