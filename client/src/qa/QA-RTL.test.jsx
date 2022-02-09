import React from 'react';
import { render, screen } from '@testing-library/react';
 
const Goodbye = () => {
  return <h1>Bye Everyone</h1>;
};
 
test('should print the Goodbye component', () => {
  render(<Goodbye/>);
  screen.debug();
});