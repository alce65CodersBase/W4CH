import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Step1 from './step1';

describe('Given Step1 component', () => {
  beforeEach(() => {
    render(<Step1></Step1>);
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentStep1 = screen.getByRole('region', { name: 'step1' });
      expect(componentStep1).toBeInTheDocument();
    });
  });
});
