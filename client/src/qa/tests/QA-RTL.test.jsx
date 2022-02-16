import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import QA from '../QA';


describe('QA', () => {
  test('should print the QA component heading', () => {
    render(<QA />);

    expect(screen.getByText('QUESTIONS & ANSWERS')).toBeInTheDocument();
  });
});