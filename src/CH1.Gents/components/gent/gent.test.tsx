import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MOCK_GENTS } from '../../mock/gents';
import { Gent } from './gent';

const gent = MOCK_GENTS[0];
describe('Given Gent component', () => {
  const selectGent = jest.fn();
  const deleteGent = jest.fn();
  beforeEach(() => {
    render(
      <Gent gent={gent} selectGent={selectGent} deleteGent={deleteGent}></Gent>
    );
  });
  describe('When it has been rendered', () => {
    test('Then it should be on the screen', () => {
      const componentGent = screen.getByRole('listitem', { name: 'gent' });
      expect(componentGent).toBeInTheDocument();
    });
    test('Then it should be used icon "select"', async () => {
      const componentsIcon = screen.getAllByRole('button');
      await userEvent.click(componentsIcon[0]);
      expect(selectGent).toHaveBeenCalled();
    });
    test('Then it should be used icon "delete"', async () => {
      const componentsIcon = screen.getAllByRole('button');
      await userEvent.click(componentsIcon[1]);
      expect(deleteGent).toHaveBeenCalled();
    });
  });
});
