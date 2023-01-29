import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { App } from './app';

describe('Given "App" component', () => {
  render(<App></App>);
  describe('When it is render', () => {
    test(`Then 'Poke' should be in the document`, () => {
      const element = screen.getByText(/Poke/i);
      expect(element).toBeInTheDocument();
    });
  });
});
