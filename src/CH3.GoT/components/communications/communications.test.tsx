import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Communications } from './communications';

describe('Given Communications component', () => {
  describe('When we render the component', () => {
    beforeEach(() => {
      render(
        <Router>
          <Communications />
        </Router>
      );
    });
    test('Then it should display the title', () => {
      const title = /Communications/i;
      const element = screen.getByRole('region', { name: title });
      expect(element).toBeInTheDocument();
    });
  });
});
