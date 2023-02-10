import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Info } from './info';

describe('Given the component Info', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<Info />);
      const element = screen.getByText(/info/i);
      // Alt screen.getByRole('heading', { name: 'CH4 Phone' });
      expect(element).toBeInTheDocument();
    });
  });
});
