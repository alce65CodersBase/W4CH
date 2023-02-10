import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Actions } from './actions';

describe('Given the component Actions', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<Actions />);
      const element = screen.getByText(/actions/i);
      // Alt screen.getByRole('heading', { name: 'CH4 Phone' });
      expect(element).toBeInTheDocument();
    });
  });
});
