import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Step3 from './step3';

describe('Given Step3 component', () => {
  beforeEach(() => {
    render(<Step3></Step3>);
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentStep3 = screen.getByRole('region', { name: 'step3' });
      expect(componentStep3).toBeInTheDocument();
    });
  });
});
