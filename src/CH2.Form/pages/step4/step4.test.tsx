import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Step4 } from './step4';

describe('Given Step4 component', () => {
  beforeEach(() => {
    render(<Step4></Step4>);
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentStep4 = screen.getByRole('region', { name: 'step4' });
      expect(componentStep4).toBeInTheDocument();
    });
  });
});
