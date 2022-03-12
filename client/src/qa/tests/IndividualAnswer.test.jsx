import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import IndividualAnswer from '../components/IndividualAnswer.jsx';
import mockAns from '../../data/exampleAnswerData.js';

configure({ adapter: new Adapter() });

describe('RENDER: INDIVIDUAL QUESTION', () => {
  let wrap;

  beforeEach(() => {
    wrap = shallow(
      <IndividualAnswer answer={mockAns.results[0]} />
    );
  });
  
  it('should print answer body in the proper format -> "A: <answer body>"', () => {
    expect(
      wrap.containsMatchingElement(
        <p><span>A:&nbsp;&nbsp;</span>{mockAns.results[0].body}</p>
      )
    ).toBeTruthy();

    expect(
      wrap.containsMatchingElement(
        <p>{mockAns.results[0].body}</p>
      )
    ).toBeFalsy();
  });

  it('should print date in proper format: "Month DD, YYYY"', () => {
    expect(wrap.text()).toContain('February 18, 2019');
    expect('Feb').toEqual(expect.not.stringContaining(wrap.text()));
    expect('2019-02-18').toEqual(expect.not.stringContaining(wrap.text()));
  });

  it('should print the correct count of helpfulness', () => {
    expect(wrap.text()).toContain('(9)');
    expect('()').toEqual(expect.not.stringContaining(wrap.text()));
  });
});