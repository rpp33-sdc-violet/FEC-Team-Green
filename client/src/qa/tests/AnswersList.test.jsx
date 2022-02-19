import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnswersList from '../components/AnswersList.jsx';
// fixture
import exampleAnswerDataQ563785 from '../../data/exampleAnswerData.js';

describe('ANSWERS LIST', () => {
  it('should render four answers if four answers are passed as props', () => {
    render(<AnswersList answers={exampleAnswerDataQ563785}/>);
    
  });
});