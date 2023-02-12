import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Icon } from './icon';

describe('Given Icon component rendered', () => {
  describe('When the character is alive', () => {
    beforeEach(() => {
      render(<Icon category="king" isAlive={true} />);
    });
    test('Then it should display the element', () => {
      const title = /Icon/i;
      const element = screen.getByRole('region', { name: title });
      expect(element).toBeInTheDocument();
    });
  });

  describe('When the character is NOT alive', () => {
    beforeEach(() => {
      render(<Icon category="king" isAlive={false} />);
    });
    test('Then it should display the element rotated', () => {
      const title = /Icon/i;
      const element = screen.getByRole('region', { name: title });
      expect(element).toBeInTheDocument();
      expect(element).toHaveClass('rotate');
    });
  });
});
