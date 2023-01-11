import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Step2 } from './step2';

describe('Given Step2 component', () => {
  beforeEach(() => {
    render(<Step2></Step2>);
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentStep2 = screen.getByRole('region', { name: 'step2' });
      expect(componentStep2).toBeInTheDocument();
    });
  });
});
