import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MOCK_GENTS } from '../../mock/gents';
import { Gent } from './gent';

const gent = MOCK_GENTS[0];
describe('Given Gent component', () => {
  beforeEach(() => {
    render(<Gent gent={gent}></Gent>);
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentGent = screen.getByRole('listitem', { name: 'gent' });
      expect(componentGent).toBeInTheDocument();
    });
  });
});
