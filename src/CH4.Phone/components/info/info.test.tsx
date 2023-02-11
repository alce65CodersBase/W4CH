import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Info } from './info';

describe('Given the component Info', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<Info />);
      const element = screen.getByRole('region', { name: 'info' });
      expect(element).toBeInTheDocument();
    });
  });
});
