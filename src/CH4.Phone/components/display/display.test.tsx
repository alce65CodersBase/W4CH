import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Display } from './display';

describe('Given the component Display', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<Display />);
      const element = screen.getByText(/display/i);
      // Alt screen.getByRole('heading', { name: 'CH4 Phone' });
      expect(element).toBeInTheDocument();
    });
  });
});
