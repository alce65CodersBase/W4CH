import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Key } from './key';

describe('Given the component Key', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<Key />);
      const element = screen.getByText(/key/i);
      // Alt screen.getByRole('heading', { name: 'CH4 Phone' });
      expect(element).toBeInTheDocument();
    });
  });
});
