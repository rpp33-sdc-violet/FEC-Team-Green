import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import QuestionsList from '../components/QuestionsList.jsx';
// fixture
import { exampleQuestionData64624, exampleQuestionData64621 } from '../../data/exampleQuestionData.js';
// 64624 = 5, 64621 = 8

configure({ adapter: new Adapter() });

describe('QUESTIONS LIST', () => {
  beforeAll(() => {
    window.alert = () => {}; // provide an empty implementation for window.alert
  });
  
  it('should render five questions if five questions are passed as props', () => {    
    const wrapper = mount(<QuestionsList questions={exampleQuestionData64624.results} />);
    expect(wrapper.find('.question').length).toEqual(5);
  });

  it('should render eight questions if eight questions are passed as props', () => {
    const wrapper = mount(<QuestionsList questions={exampleQuestionData64621.results} />);
    expect(wrapper.find('.question').length).toEqual(8);
  });

  it('should render no questions if no questions are passed as props', () => {
    const wrapper = mount(<QuestionsList questions={[]} />);
    expect(wrapper.find('.question').length).toEqual(0);
  });
});

/* USING REACT TESTING LIBRARY 
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QuestionsList from '../components/QuestionsList.jsx';
// fixture
import { exampleQuestionData64624, exampleQuestionData64621 } from '../../data/exampleQuestionData.js';
// 64624 = 5, 64621 = 8

describe('QUESTIONS LIST', () => {
  beforeAll(() => {
    window.alert = () => {}; // provide an empty implementation for window.alert
  });

  it('should render five questions if five questions are passed as props', () => {    
    render(<QuestionsList questions={exampleQuestionData64624.results} />);
    const questionsList = screen.getByRole('questions-list');
    const { getAllByRole } = within(questionsList);
    const questions = getAllByRole('question');
    expect(questions.length).toBe(5);
  });
  
  it('should render eight questions if eight questions are passed as props', () => {
    render(<QuestionsList questions={exampleQuestionData64621.results} />);
    const questionsList = screen.getByRole('questions-list');
    const { getAllByRole } = within(questionsList);
    const questions = getAllByRole('question');
    expect(questions.length).toBe(8);
  });

  it('should render no questions if no questions are passed as props', () => {
    render(<QuestionsList questions={[]} />);
    expect(screen.queryByText(/Q/)).toBeNull();
  });
}); */