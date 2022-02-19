import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Overview from '../Overview';


describe('overview', () => {
  test('should print the overview component heading', () => {
    render(<Overview />);

    expect(screen.getByText('ImageContainer')).toBeInTheDocument();
  });
});