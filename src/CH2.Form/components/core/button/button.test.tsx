import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
// NEXT import userEvent from '@testing-library/user-event';
import { Button } from './button';

describe('Given component Button', () => {
  describe('When it has be rendered', () => {
    beforeEach(() => {
      render(
        <form>
          <Button label="Test"></Button>
        </form>
      );
    });
    test('Then label should be in the screen', async () => {
      const element = screen.getByRole('button');
      expect(element).toBeInTheDocument();
    });
  });
});
