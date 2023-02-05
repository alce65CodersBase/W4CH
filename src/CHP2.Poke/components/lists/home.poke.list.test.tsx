import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HomePokeList } from './home.poke.list';
import { AppContext } from '../../context/app.context';
import { UsePoke } from '../../hooks/use.poke';
import { MOCK_FULL_CONTEXT } from '../../__mocks__/context';

describe('Given the component HomePokeList', () => {
  describe('When it is rendered ', () => {
    let elements: HTMLElement[];
    beforeEach(() => {
      const context: UsePoke = MOCK_FULL_CONTEXT;
      render(
        <AppContext.Provider value={context}>
          <HomePokeList></HomePokeList>
        </AppContext.Provider>
      );
      elements = [screen.getByRole('heading'), screen.getByText(/Pokemons/i)];
    });
    test('Then the element should be in the document', () => {
      expect(elements[0]).toBeInTheDocument();
    });

    test('Then the title "Pokemons" should be visible for the user', () => {
      expect(elements[1]).toBeTruthy();
    });
  });
});
