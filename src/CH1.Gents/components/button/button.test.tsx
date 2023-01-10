import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button, ButtonLabel } from './button';

describe('Given Button component', () => {
  const labels: Array<ButtonLabel> = ['Select all', 'Deselect all'];
  const selectAll = jest.fn();

  describe(`When it has been rendered with ${labels[0]}`, () => {
    beforeEach(() => {
      render(<Button label={labels[0]} selectAll={selectAll}></Button>);
    });
    test('Then it should be on the screen', async () => {
      const componentButton = screen.getByRole('button');
      expect(componentButton).toBeInTheDocument();
      await userEvent.click(componentButton);
      expect(selectAll).toHaveBeenLastCalledWith(true);
    });
  });

  describe(`When it has been rendered with ${labels[1]}`, () => {
    beforeEach(() => {
      render(<Button label={labels[1]} selectAll={selectAll}></Button>);
    });
    test('Then it should be on the screen', async () => {
      const componentButton = screen.getByRole('button');
      expect(componentButton).toBeInTheDocument();
      await userEvent.click(componentButton);
      expect(selectAll).toHaveBeenLastCalledWith(false);
    });
  });
});
