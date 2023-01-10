import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { App } from './app';

describe('Given the component App', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(<App />);
      const app = screen.getByRole('application');
      expect(app).toBeInTheDocument();
    });
  });
});
