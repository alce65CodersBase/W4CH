import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { Icon } from './icon';

describe('Given Icon component', () => {
  describe('When we render the component', () => {
    beforeEach(() => {
      render(
        <Router>
          <Icon category="king" isAlive={true} />
        </Router>
      );
    });
    test('Then it should display the title', () => {
      const title = /Icon/i;
      const element = screen.getByText(title);
      expect(element).toBeInTheDocument();
    });
  });
});
