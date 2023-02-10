import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Keyboard } from './keyboard';

describe('Given the component Keyboard', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<Keyboard />);
      const element = screen.getByText(/keyboard/i);
      // Alt screen.getByRole('heading', { name: 'CH4 Phone' });
      expect(element).toBeInTheDocument();
    });
  });
});
