import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReviewList from './reviewList.jsx';

describe('ReviewList', ()=> {
  test('should render ReviewList heading', () => {
    render(<ReviewList />);
    expect(screen.getByText('Review List')).toBeInTheDocument();
  });
});

