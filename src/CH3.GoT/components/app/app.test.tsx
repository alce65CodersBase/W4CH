import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { App } from './app';
import { AppContext, ContextStructure } from '../../context/context';
import { CharacterStructure } from '../../models/character';
import { CharacterList } from '../character.list/character.list';
import { Communications } from '../communications/communications';

jest.mock('../character.list/character.list');
jest.mock('../communications/communications');

const renderElements = (whoIsTalking: CharacterStructure | null) => {
  const context = {
    state: { whoIsTalking },
  } as ContextStructure;
  render(
    <AppContext.Provider value={context}>
      <App />
    </AppContext.Provider>
  );
};

describe('Given the component App rendered', () => {
  describe('When NO character is talking', () => {
    test('Then CharacterList should be on the screen', () => {
      renderElements(null);
      const header = screen.getByRole('heading', {
        name: 'CH3 Game of Trons',
      });
      expect(header).toBeInTheDocument();
      expect(CharacterList).toHaveBeenCalled();
    });
  });
  describe('When a character is talking', () => {
    test('Then CharacterList & Comunications should be on the screen', () => {
      renderElements({} as CharacterStructure);
      expect(CharacterList).toHaveBeenCalled();
      expect(Communications).toHaveBeenCalled();
    });
  });
});
