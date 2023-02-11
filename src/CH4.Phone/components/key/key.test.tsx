import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Key } from './key';

describe('Given the component Key', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<Key label="test" />);
      const element = screen.getByRole('button', { name: 'test' });
      expect(element).toBeInTheDocument();
    });
  });
});
