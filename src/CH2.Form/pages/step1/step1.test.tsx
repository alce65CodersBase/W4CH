import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import Step1 from './step1';

describe('Given Step1 component', () => {
  beforeEach(() => {
    render(
      <Router>
        <Step1>
          <div>Mock de personalForm</div>
        </Step1>
      </Router>
    );
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentStep1 = screen.getByRole('region', { name: 'step1' });
      expect(componentStep1).toBeInTheDocument();
    });
  });
});
