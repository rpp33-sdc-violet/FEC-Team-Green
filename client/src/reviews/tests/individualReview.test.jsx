import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import IndividualReview from '../individualReview.jsx';
import reviewSample from '../exampleData.js';
describe('IndividualReview', ()=>{
  /*beforeEach(() => {
    render(<IndividualReview review={reviewSample[0]} />);
  });*/

  it('should render Review Summary', ()=>{
    render(<IndividualReview review={reviewSample[0]} />);
    expect(screen.getByText('These pants are ok!')).toBeInTheDocument();
  });

  it('should render Review Body', ()=>{
    render(<IndividualReview review={reviewSample[0]} />);
    expect(screen.getByText('A little tight on the waist.')).toBeInTheDocument();
  });

  it('Review body should only display the first 250 characters by defualt', ()=>{
    render(<IndividualReview review={reviewSample[1]} />);
    expect(screen.getByText('In et omnis alias. Delectus quos sint assumenda esse illum hic et dolorem. Iure rem totam nihil molestiae nihil accusamus commodi. Quae autem autem eos accusamus distinctio. Qui sunt quia excepturi sint dolore distinctio aut delectus. Totam nemo modi')).toBeInTheDocument();
  });

  it('should show a link reading "Show more" if the review is longer than 250 characters', () => {
    render(<IndividualReview review={reviewSample[1]} />);
    expect(screen.getByText('Show more')).toBeInTheDocument();

    expect(screen.getByRole('link', { name: /Show more/i })).toBeInTheDocument();
  });

  it('if the review has a corresponding response, it should show on the screen and be preceded by the text "Respond from seller"', () => {
    render(<IndividualReview review={reviewSample[2]} />);
    expect(screen.getByText('Sorry to hear. Is there anything in particular you don\'t like?')).toBeInTheDocument();
    expect(screen.getByText('Response from seller:')).toBeInTheDocument();
  });

});