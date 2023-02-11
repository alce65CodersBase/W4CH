import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Actions } from './actions';

describe('Given the component Actions', () => {
  describe('When it is rendered', () => {
    test('Then it should be on the screen', () => {
      render(
        <Actions>
          <></>
        </Actions>
      );
      const element = screen.getByRole('region', { name: 'actions' });
      expect(element).toBeInTheDocument();
    });
  });
});
