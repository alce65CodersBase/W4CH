import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Action } from './action';

describe('Given the component Action', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<Action />);
      const element = screen.getByText(/action/i);
      // Alt screen.getByRole('heading', { name: 'CH4 Phone' });
      expect(element).toBeInTheDocument();
    });
  });
});
