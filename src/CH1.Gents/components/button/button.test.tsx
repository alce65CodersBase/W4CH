import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Given Button component', () => {
  beforeEach(() => {
    render(<Button></Button>);
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentButton = screen.getByRole('button');
      expect(componentButton).toBeInTheDocument();
    });
  });
});
