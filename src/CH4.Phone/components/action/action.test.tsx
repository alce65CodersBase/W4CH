import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Action } from './action';

describe('Given the component Action', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<Action label="test" type="test" />);
      const element = screen.getByRole('link', { name: 'test' });
      expect(element).toBeInTheDocument();
    });
  });
});
