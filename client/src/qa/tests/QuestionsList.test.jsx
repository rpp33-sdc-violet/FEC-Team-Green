import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionsList from '../components/QuestionsList.jsx';
import exampleQuestionData from '../../data/exampleQuestionData.js';


describe.skip('RENDER: QUESTION LIST', () => {
  test('should print question body in proper format -> Q: <question body>', () => {
    render(<QuestionsList questions={exampleQuestionData.results}/>);
  
    expect(screen.getByText('Q: Why is this product cheaper here than other sites?')).toBeInTheDocument();
  });

  // test('should print helpful link for questions', () => {
  //   render(<QuestionsList questions={exampleQuestionData.results}/>);
  //   console.log(screen.queryAllByText(/Helpful/));
  //   expect(screen.queryAllByText(/Helpful/)).toBe(5);
  // });
});