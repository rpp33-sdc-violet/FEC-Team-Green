import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnswersList from '../components/AnswersList.jsx';
// fixture
import exampleAnswerDataQ563785 from '../../data/exampleAnswerData.js';

describe('ANSWERS LIST', () => {
  it('should render four answers if four answers are passed as props', () => {
    render(<AnswersList answers={exampleAnswerDataQ563785.results}/>);
    const answersList = screen.getByRole('answers-list');
    const { getAllByRole } = within(answersList);
    const answers = screen.getAllByRole('answer');
    expect(answers.length).toBe(4);
  });

  it('should render one answer if just one answer is passed as props', () => {
    render(<AnswersList answers={[exampleAnswerDataQ563785.results[0]]}/>);
    const answersList = screen.getByRole('answers-list');
    const { getAllByRole } = within(answersList);
    const answers = screen.getAllByRole('answer');
    expect(answers.length).toBe(1);
  });

  it('should render no answers if no answers are passed as props', () => {
    render(<AnswersList answers={[]}/>);
    expect(screen.queryByText(/A/)).toBeNull();
  });
});