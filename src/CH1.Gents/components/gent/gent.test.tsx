import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Gent } from './gent';

describe('Given Gent component', () => {
  beforeEach(() => {
    render(<Gent></Gent>);
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentGent = screen.getByRole('listitem', { name: 'gent' });
      expect(componentGent).toBeInTheDocument();
    });
  });
});
