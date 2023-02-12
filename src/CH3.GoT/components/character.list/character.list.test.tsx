import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { CharacterList } from './character.list';
import { CharacterCard } from '../character.card/character.card';
import { MOCK_KING } from '../../mocks/characters';
import { AppContext, ContextStructure } from '../../context/context';

jest.mock('../character.card/character.card');
const context = {
  state: { characters: [MOCK_KING] },
  handleLoad: jest.fn(),
} as unknown as ContextStructure;

describe('Given CharacterList component rendered', () => {
  describe('When there are 1 character in the state array', () => {
    beforeEach(() => {
      render(
        <AppContext.Provider value={context}>
          <CharacterList />
        </AppContext.Provider>
      );
    });
    test('Then it should display the title and 1 Card', () => {
      const title = /CharacterList/i;
      const element = screen.getByRole('list', { name: title });
      expect(element).toBeInTheDocument();
      expect(CharacterCard).toHaveBeenCalledTimes(1);
    });
  });
});
