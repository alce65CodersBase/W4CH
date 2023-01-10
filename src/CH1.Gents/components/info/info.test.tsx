import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Info } from './info';

describe('Given Info component', () => {
  beforeEach(() => {
    render(<Info></Info>);
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentInfo = screen.getByRole('region');
      expect(componentInfo).toBeInTheDocument();
    });
  });
});
