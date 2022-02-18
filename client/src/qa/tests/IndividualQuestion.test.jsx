import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IndividualQuestion from '../components/IndividualQuestion.jsx';
// fixture
import { exampleQuestionData64624 } from '../../data/exampleQuestionData.js';

describe('RENDER: INDIVIDUAL QUESTION', () => {
  beforeEach(() => {
    render(<IndividualQuestion question={exampleQuestionData64624.results[0]} />);
  });

  it('should print question body in the proper format -> "Q: <question body>"', () => {
    expect(screen.getByText('Q: Why is this product cheaper here than other sites?')).toBeInTheDocument();
  });

  it('should print "Helpful?" for each question', () => {
    expect(screen.getByText(/Helpful?/)).toBeInTheDocument();
  });

  it('should include a link that prints "Yes (<correct count>)"', () => {
    expect(screen.getByText('Yes')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /yes/i })).toBeInTheDocument();

    expect(screen.getByText(/4/)).toBeInTheDocument();
  });

  it('should include a link that prints "Add Answer"', () => {
    expect(screen.getByRole('link', { name: /add answer/i })).toBeInTheDocument();
  });
});