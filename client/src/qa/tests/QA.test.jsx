import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QA from '../QA';


describe('RENDER: HEADING', () => {
  test('should print the QA component heading', () => {
    render(<QA />);
  
    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });

  test('should include an "ADD A QUESTION +" button', () => {
    render(<QA />);
    expect(screen.getByText('ADD A QUESTION +')).toBeInTheDocument();
  });
});