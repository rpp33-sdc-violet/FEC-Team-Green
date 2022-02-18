import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionsList from '../components/QuestionsList.jsx';
import { exampleQuestionData64621 } from '../../data/exampleQuestionData.js';


describe.skip('Displaying Questions', () => {
  test('should display two questions on page load up', () => {
    render(<QuestionsList questions={exampleQuestionData64621.results} />);


  });

});